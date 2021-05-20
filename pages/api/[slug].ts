import { NextApiRequest, NextApiResponse } from 'next'
import { getGistData, setGistData } from 'utils/gist'

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const db = await getGistData()
    if (req.method === 'GET') {
      res.status(200).json(db)
    } else {
      const newDb = await setGistData(req.body)
      res.status(200).json(newDb)
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}
