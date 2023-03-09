import { getMovieCredits } from 'components/API/FetchApi';
import { CastItem } from 'components/CastItem/CastItem';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastError } from './Cast.styled';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    const fetchMovieCast = async movieId => {
      try {
        const data = await getMovieCredits(movieId, {
          signal: controller.signal,
        });
        setCasts(data.cast);
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

  return (
    <Section title={'Cast'}>
      <CastList>
        {casts.map(cast => (
          <CastItem key={cast.id} cast={cast} />
        ))}
      </CastList>
      {isLoading && <Loader />}
      <CastError>We don`t have cast for this movie</CastError>
    </Section>
  );
};

export default Cast;
