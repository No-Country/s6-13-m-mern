import { Request, Response, NextFunction } from 'express'
import { getUserService } from '../services/user/getUserService'
import { IResponse } from '../interfaces/response'

export const validateAccountsValidated = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params

    try {
        const resp = (await getUserService({ id })) as IResponse

        if (resp.ok)
            return res
                .status(404)
                .json({ ok: false, msg: 'User already validated' })

        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        return next()
    } catch (error) {}
}
