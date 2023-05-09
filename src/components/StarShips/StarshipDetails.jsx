//modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//services
import { getStarship } from "../../services/sw-api";


const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState([])
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const shipData = await getStarship(starshipId)
      setStarshipDetails(shipData)
    }
    fetchDetails()
  },[starshipId])

  if (!starshipDetails.length) return <h1>Loading Page...</h1>
  return ( 
    <main>
      <div className="card-container">
        <div className="ship-details">
          <h2>Name: {starshipDetails.name}</h2>
          <h2>Model: {starshipDetails.model}</h2>
          <Link to="/">RETURN</Link>
        </div>
      </div>
    </main>
  )
}
export default StarshipDetails;

