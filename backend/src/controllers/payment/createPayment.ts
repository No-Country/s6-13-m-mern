import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { createPaymentService, getUserService } from '../../services'
import { getConsortiumService } from '../../services/consortium'

export const createPayment = async (req: Request, res: Response) => {
    const { note, ammount, paymentMethod, image } = req.body
    const { id } = req.params
    let ok: boolean | undefined
    let status: number | undefined

    try {
        const userResponse = (await getUserService({ id })) as IResponse
        ok = userResponse.ok
        status = userResponse.status
        const user = userResponse.user

        //* Comprobar que existe el usuario con el id
        if (!ok && status === 404) {
            return res.status(status).json({ ok, msg: 'User not found' })
        }

        //* Comprobar que sea un usuario activo
        if (!ok && status === 401) {
            return res.status(status).json({ ok, msg: 'User is not active' })
        }

        const consortiumID = user.consortium[0]
        if (!consortiumID) {
            return res
                .status(status)
                .json({ ok, msg: 'The user does not belong to any consortium' })
        }
        const consortiumResponse = (await getConsortiumService(
            consortiumID._id
        )) as IResponse
        ok = consortiumResponse.ok
        status = consortiumResponse.status
        const consortiumRetrieved = consortiumResponse.consortium

        //* Comprobar que existe el consorcio con el id
        if (!ok && status === 404) {
            return res.status(status).json({ ok, msg: 'Consortium not found' })
        }

        const newPayment = (await createPaymentService({
            note,
            ammount,
            paymentMethod,
            image,
            user: id,
        })) as IResponse
        status = newPayment.status
        const payment = newPayment.payment

        consortiumRetrieved.payments = [
            ...consortiumRetrieved.payments,
            payment._id,
        ]

        await consortiumRetrieved.save()
        await payment.save()

        return res.status(status).json({ ok, msg: 'Payment created' })
    } catch (error) {
        return res.status(500).json({ ok: false, error })
    }
}
