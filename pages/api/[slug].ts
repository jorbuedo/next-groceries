import { NextApiRequest, NextApiResponse } from 'next'
import { getData, setData } from 'utils/gist'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await getData()
    if (req.method === 'GET') {
      res.status(200).json(db)
    } else {
      const newDb = await setData(req.body)
      res.status(200).json(newDb)
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}
