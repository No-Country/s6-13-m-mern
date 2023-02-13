import jwt from 'jsonwebtoken'
import { ERoles } from './enums'

export const jwtGenerate = (id: string, role: ERoles, duration: string) => {
    return jwt.sign({ id, role }, `${process.env.JWT_SECRET || ''}`, {
        expiresIn: duration,
    })
}
