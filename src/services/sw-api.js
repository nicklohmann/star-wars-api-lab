const baseUrl = 'https://swapi.dev/api'

export async function getAllStarships() {
  try {

  const res = await fetch(`${baseUrl}/starships/`)
  return res.json()
  } catch(err) {
    console.log(err);
  }
}

export async function getStarship(starShipId) {
  const res = await fetch (`${baseUrl}/starships/${starShipId}`)
  return res.json()
}