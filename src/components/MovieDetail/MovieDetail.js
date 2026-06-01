import { useRouter } from 'next/router'
import styles from './MovieDetail.module.css'

const PT_TITLES = {
  'tt1099212': { pt: 'Crepúsculo', order: 1 },
  'tt1259571': { pt: 'Lua Nova', order: 2 },
  'tt1325004': { pt: 'Eclipse', order: 3 },
  'tt1324999': { pt: 'Amanhecer – Parte 1', order: 4 },
  'tt1673434': { pt: 'Amanhecer – Parte 2', order: 5 },
}

export default function MovieDetail({ movie }) {
  const router = useRouter()
  const meta = PT_TITLES[movie.imdbID] || {}
  const hasPoster = movie.Poster && movie.Poster !== 'N/A'
  const genres = movie.Genre ? movie.Genre.split(', ') : []

  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={() => router.push('/')}>
        ← Voltar à tela principal
      </button>

      <div className={styles.hero}>
        <div>
          {hasPoster && (
            <div className={styles.posterWrapper}>
              <img src={movie.Poster} alt={meta.pt || movie.Title} className={styles.poster} />
            </div>
          )}
        </div>

        <div className={styles.filmInfo}>
          {meta.order && (
            <span className={styles.orderLabel}>Filme {meta.order} da saga</span>
          )}
          <h1 className={styles.title}>{meta.pt || movie.Title}</h1>
          {meta.pt && (
            <p className={styles.originalTitle}>{movie.Title} ({movie.Year})</p>
          )}

          {movie.imdbRating && movie.imdbRating !== 'N/A' && (
            <div className={styles.ratingBig}>
              <span className={styles.starBig}>★</span>
              <span className={styles.ratingNumber}>{movie.imdbRating}</span>
              <span className={styles.ratingOf}>/&nbsp;10 no IMDb</span>
            </div>
          )}

          <div className={styles.divider} />

          {movie.Plot && movie.Plot !== 'N/A' && (
            <p className={styles.plot}>{movie.Plot}</p>
          )}

          <div className={styles.metaGrid}>
            {movie.Runtime && movie.Runtime !== 'N/A' && (
              <div className={styles.metaItem}>
                <div className={styles.metaLabel}>Duração</div>
                <div className={styles.metaValue}>{movie.Runtime}</div>
              </div>
            )}
            {movie.Director && movie.Director !== 'N/A' && (
              <div className={styles.metaItem}>
                <div className={styles.metaLabel}>Direção</div>
                <div className={styles.metaValue}>{movie.Director}</div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  )
}
