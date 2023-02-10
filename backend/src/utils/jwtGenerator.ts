import jwt from 'jsonwebtoken'

export const jwtGenerate = (id: string, role: boolean) => {
    return jwt.sign({ id, role }, `${process.env.JWT_SECRET || ''}`, {
        expiresIn: '1d',
    })
}
