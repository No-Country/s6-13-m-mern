import jwt from 'jsonwebtoken';

export const jwtGenerate = (id: string, admin: Boolean) => {
  return jwt.sign({ id, admin }, `${process.env.JWT_SECRET}`, {
    expiresIn: '1d',
  });
};
