import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { getConsortiumService } from '../../services'

export const deleteConsortium = async (req: Request, res: Response) => {
    const { consortiumId, id } = req.params

    try {
        const { ok, status, consortium } = (await getConsortiumService(
            consortiumId
        )) as IResponse

        //* Comprobar que existe el consorcio con el id
        if (!ok && status === 404) {
            return res.status(status).json({ ok, msg: 'Consortium not found' })
        }

        // Comprobar si el el admin del consorcio
        if (consortium.admin.toString() !== id) {
            return res
                .status(401)
                .json({ ok: false, msg: 'User is not the consortium admin' })
        }

        consortium.status = 'disabled'
        await consortium.save()

        return res.status(status).json({ ok, msg: 'Consortium deleted' })
    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
}
