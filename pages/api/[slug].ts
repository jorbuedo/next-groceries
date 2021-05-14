import { NextApiRequest, NextApiResponse } from 'next'

const GIST_TOKEN = process.env.GIST_TOKEN
const GIST_ID = process.env.GIST_ID
const GIST_FILENAME = process.env.GIST_FILENAME ?? 'db.json'

/*
 * Reads the JSON file inside of the gist
 */
const getData = async () => {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`)
  const gist = await req.json()
  return JSON.parse(gist.files[GIST_FILENAME].content)
}

/*
 * Puts the data you want to store back into the gist
 */
const setData = async (data: Object) => {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${GIST_TOKEN}`,
    },
    body: JSON.stringify({
      files: {
        [GIST_FILENAME]: {
          content: JSON.stringify(data),
        },
      },
    }),
  })

  return req.json()
}

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
