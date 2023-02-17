import { Request, Response } from 'express';
import { getConsortiumService } from '../../services/consortium';


export const getConsortium = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const { ok, status, consortium, error } = await getConsortiumService(userId);
    if (!ok) {
      return res.status(status).json({ error });
    }

    return res.status(status).json(consortium);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
