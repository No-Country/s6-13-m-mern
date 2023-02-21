import { Request, Response } from 'express'
// import { IConsortium } from '../../interfaces/consortium'
import Consortium from '../../models/Consortium'
import User from '../../models/User'

export const removeFromConsortium = async (req: Request, res: Response) => {
    const { id, consortiumID } = req.params
    try {
        const user = await User.findById(id)
        const consortium = await Consortium.findById(consortiumID)

        if (!user || !consortium) {
            return res
                .status(400)
                .json({ ok: false, msg: 'no hay usuario o consorcio' })
        }

        if (!user.consortium || user.consortium.length < 1) {
            return res.status(400).json({
                ok: false,
                msg: 'el usuario no tiene consorcios asociados',
            })
        } else {
            //* Con filter no lo podia hacer y no se me ocurrio otra forma
            const newUserConsortiums = user.consortium
                .map(
                    (c: { toString: () => string }) =>
                        c.toString() !== consortiumID && c
                )
                .filter((e: any) => e)

            const newConsortiumUsers = consortium.users
                .map(
                    (user: { toString: () => string }) =>
                        user.toString() !== id && user
                )
                .filter((elem: any) => elem)

            consortium.users = newConsortiumUsers
            user.consortium = newUserConsortiums

            if (user.role === 'tenant') user.role = 'user'

            await user.save()
            await consortium.save()
        }

        return res
            .status(200)
            .json({ ok: true, msg: 'User removed from consortium' })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Server Error',
            error,
        })
    }
}
