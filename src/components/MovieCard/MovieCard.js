import { useRouter } from 'next/router'
import styles from './MovieCard.module.css'

export default function MovieCard({ movie, order, tagline }) {
  const router = useRouter()

  const hasPoster = movie.Poster && movie.Poster !== 'N/A'

  function handleClick() {
    router.push(`/movie/${movie.imdbID}`)
  }

  return (
    <div className={styles.card} onClick={handleClick} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className={styles.posterWrapper}>
        {hasPoster ? (
          <img
            src={movie.Poster}
            alt={`Pôster de ${movie.ptTitle || movie.Title}`}
            className={styles.poster}
          />
        ) : (
          <div className={styles.posterFallback}>
            <span style={{ color: 'var(--gold-dim)', fontSize: '2rem' }}>🌙</span>
          </div>
        )}
   
        <div className={styles.overlay}>
    
        </div>
      </div>

      <div className={styles.info}>
        <h2 className={styles.title}>{movie.ptTitle || movie.Title}</h2>
        <span className={styles.year}>{movie.Year}</span>
        {tagline && <p className={styles.tagline}>"{tagline}"</p>}
        {movie.imdbRating && movie.imdbRating !== 'N/A' && (
          <div className={styles.ratingRow}>
            <span className={styles.star}>★</span>
            <span className={styles.rating}>{movie.imdbRating} / 10</span>
          </div>
        )}
      </div>
    </div>
  )
}
