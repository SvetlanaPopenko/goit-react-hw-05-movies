export const CastItem = ({ cast: { name, character, profile_path } }) => {
  return (
    <li>
      <img
        src={
          profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : ''
        }
        alt={name}
          />
          <div>
              <h2>{name}</h2>
              <p>Character: {character||'No name' }</p>
          </div>
    </li>
  );
};
