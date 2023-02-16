import { Request, Response } from 'express';
import { addAmenityService } from '../../services/consortium';

export const addAmenityConsortium = async (req: Request, res: Response) => {
  const { consortiumId, amenityId } = req.params;
  try {
    const { ok, status, error, msg } = await addAmenityService(consortiumId, amenityId);
    if (!ok) {
      return res.status(status).json({ error });
    }
    return res.status(status).json({ msg });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
