import jwt from 'jsonwebtoken'

export const jwtGenerate = (id: string, role: Boolean) => {
    return jwt.sign({ id, role }, `${process.env.JWT_SECRET}`, {
        expiresIn: '1d',
    })
}
