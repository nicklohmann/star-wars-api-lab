import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { getAllStarships } from "../../services/sw-api";

const Starships  = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const shipData = await getAllStarships()
      setStarships(shipData.results)
    }
    fetchStarships()
  }, [])
  
  if (!starships.length) return <h1>Loading Page...</h1>

  return (
    <main>
      <div className="card-container">
        {starships.map((starship, idx) => {
          const StarshipId = starship.url.slice(21)
          return (
            <div className="ship-card" key={idx}>
              <Link to={`${StarshipId}`}>{starship.name}</Link>
            </div>
          )
        })}
      </div>
    </main>
  )

}
export default Starships