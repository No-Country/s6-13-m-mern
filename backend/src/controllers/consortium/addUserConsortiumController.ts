import { Request, Response } from 'express';
import { addUserService } from './../../services/consortium';

// TODO: REALIZAR MIDDLEWARE VALIDACIONES DE CAMPOS
export const addUserConsortium = async (req: Request, res: Response) => {
  const { consortiumId, userId } = req.params;
  const apt: string | undefined = req.query.apt?.toString();
  const floor: number = Number(req.query.floor);
  try {
    const { ok, status, error } = await addUserService(consortiumId, userId, apt as string, floor);
    if (!ok) {
      return res.status(status).json({ error });
    }
    return res.status(status).json({ msg: 'Usuario ingresado correctamente al consorcio' });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
