import jwt from 'jsonwebtoken';

const jwtGenerate = (id: string, admin: Boolean) => {
  return jwt.sign({ id, admin }, `${process.env.JWT_SECRET}`, {
    expiresIn: '1d',
  });
};

export default jwtGenerate;