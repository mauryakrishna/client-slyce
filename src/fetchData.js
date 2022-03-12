
const fetchData = async (path) => {
  const baseUrl = `http://localhost:4000`
  const response = await fetch(`${baseUrl}${path}`)
  return await response.json()
}

export default fetchData