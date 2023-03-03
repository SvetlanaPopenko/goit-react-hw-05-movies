import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const MovieDetails = () => {
    const {movieId} = useParams();
    return (<div>{movieId}
        <ul>
            <li>
                <Link to="cast">Cast</Link>
            </li>
            <li>
                <link to="reviews">Reviews</link>
            </li>
        </ul>
        <Outlet/>
    </div>)
};

export default MovieDetails;