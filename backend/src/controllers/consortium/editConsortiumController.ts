import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { getConsortiumService } from '../../services'

export const editConsortiumController = async (req: Request, res: Response) => {
    const { consortiumId, id } = req.params
    const { name, floor, address, apt, amenities } = req.body

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

        consortium.name = name
        consortium.address = address
        consortium.floor = floor
        consortium.apt = apt
        consortium.amenities = amenities
        await consortium.save()

        return res.status(status).json({ ok, msg: 'Consortium Edited' })
    } catch (error) {
        console.log(error)
        return error
    }
}
