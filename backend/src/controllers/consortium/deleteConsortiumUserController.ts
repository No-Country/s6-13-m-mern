import { Request, Response } from 'express';
import { deleteConsortiumUserService } from '../../services/consortium';

// TODO: CREATE MIDDLEWARE FOR INPUT DATA
export const deleteConsortiumUser = async (req: Request, res: Response) => {
  const { consortiumId, userId } = req.body;
  try {
    const { ok, status, msg, error } = await deleteConsortiumUserService(consortiumId, userId);
    if (!ok) {
      return res.status(status).json({ error })
    }
    return res.status(status).json(msg);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
