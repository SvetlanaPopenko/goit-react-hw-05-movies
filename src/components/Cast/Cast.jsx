import { getMovieCredits } from "components/API/FetchApi";
import { CastItem } from "components/CastItem/CastItem";
import { Loader } from "components/Loader/Loader";
import { Title } from "components/Title/Title";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movieCasts, setMovieCasts] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        const fetchMovieCast = async movieId => {
      try {
        const data = await getMovieCredits(movieId, {
          signal: controller.signal,
        });
          setMovieCasts(data.cast);
            return data;
              } catch (error) {
                console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast(movieId);
    return () => {
      controller.abort();
    };
  }, [movieId]);

    
    return (<main>
        <Title>Cast</Title>
        <ul>
            {movieCasts.map(movieCast => (<CastItem key={movieCast.id} movieCast={movieCast} />))}
            {isLoading && <Loader/>}
        </ul>
    </main>)
};

export default Cast;