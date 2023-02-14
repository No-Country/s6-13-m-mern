import { Request, Response } from 'express';
import { addUserService } from './../../services/consortium';

// TODO: REALIZAR MIDDLEWARE VALIDACIONES DE CAMPOS
export const addUserConsortium = async (req: Request, res: Response) => {
  const { consortiumaddress, email, apt, floor } = req.body;
  try {
    const { ok, status, error } = await addUserService(consortiumaddress, email, apt, floor);
    if (!ok) {
      return res.status(status).json({ error });
    }
    return res.status(status).json({ msg: 'Usuario ingresado correctamente al consorcio' });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
