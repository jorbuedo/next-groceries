const GIST_TOKEN = process.env.GIST_TOKEN
const GIST_ID = process.env.GIST_ID
const GIST_FILENAME = process.env.GIST_FILENAME ?? 'db.json'

export const getGistData = async () => {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`)
  const gist = await req.json()
  return JSON.parse(gist.files[GIST_FILENAME].content)
}

export const setGistData = async (data: Record<string, unknown>) => {
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
