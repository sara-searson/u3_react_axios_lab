import { useParams } from "react-router-dom"

const StarshipPage = (props) => {
    const { starshipId } = useParams()
    const singleShip = props.starships.find((ship) => ship._id === Number(starshipId))
    console.log(singleShip)

    return(
        <>
            <h2>Starship Details</h2>
            <dl>
                <dt>Length:</dt>
                <dd>{singleShip.length}</dd>
                <dt>Crew:</dt>
                <dd>{singleShip.crew}</dd>
            </dl>
        </>
    )
}

export default StarshipPage