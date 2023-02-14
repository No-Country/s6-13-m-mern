import { Request, Response } from 'express';
import { deleteConsortiumService } from '../../services/consortium';

export const deleteConsortium = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const deleteConsortium = await deleteConsortiumService(id);
    return res.status(200).json(deleteConsortium);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
