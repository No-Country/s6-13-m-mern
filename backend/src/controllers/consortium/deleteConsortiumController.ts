import { Request, Response } from 'express';
import { deleteConsortiumService } from '../../services/consortium';


export const deleteConsortium = async (req: Request, res: Response) => {
  const { consortiumId } = req.params;
  try {
    const deleteConsortium = await deleteConsortiumService(consortiumId);
    return res.status(200).json(deleteConsortium);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
