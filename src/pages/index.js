import { useState, useEffect } from 'react'
import MovieCard from '@/components/MovieCard/MovieCard'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch('/api/movies')
        if (!res.ok) throw new Error('Falha ao carregar filmes')
        const data = await res.json()
        setMovies(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerDeco}>✦</div>
          <p className={styles.subtitle}>A Saga</p>
          <h1 className={styles.logo}>Crepúsculo</h1>
          <div className={styles.divider}>
            <span />
            <span className={styles.dividerIcon}>🌙</span>
            <span />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {loading && (
          <div className={styles.state}>
            <div className={styles.spinner} />
            <p className={styles.stateText}>Carregando a saga...</p>
          </div>
        )}

        {error && (
          <div className={styles.state}>
            <p className={styles.errorText}>⚠ {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className={styles.grid}>
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                order={movie.order}
                tagline={movie.tagline}
              />
            ))}
          </div>
        )}
      </main>

    </div>
  )
}
