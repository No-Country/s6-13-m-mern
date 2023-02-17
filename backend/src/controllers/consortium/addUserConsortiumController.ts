import { Request, Response } from 'express';
import { addUserService } from './../../services/consortium';

// TODO: REALIZAR MIDDLEWARE VALIDACIONES DE CAMPOS
export const addUserConsortium = async (req: Request, res: Response) => {
  const { consortiumId, userId } = req.params;
  const apt: number | undefined = Number(req.query.apt);
  try {
    const { ok, status, error } = await addUserService(consortiumId, userId, apt);
    if (!ok) {
      return res.status(status).json({ error });
    }
    return res.status(status).json({ msg: 'Usuario ingresado correctamente al consorcio' });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
