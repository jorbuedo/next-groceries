export const api =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://next-groceries-db.herokuapp.com'
