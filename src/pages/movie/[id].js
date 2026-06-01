import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import MovieDetail from '@/components/MovieDetail/MovieDetail'
import styles from '@/styles/MoviePage.module.css'

export default function MoviePage() {
  const router = useRouter()
  const { id } = router.query

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    async function fetchMovie() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`/api/movie?id=${id}`)
        if (!res.ok) throw new Error('Filme não encontrado')
        const data = await res.json()
        if (data.error) throw new Error(data.error)
        setMovie(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, [id])

  return (
    <div className={styles.page}>
      <div className={styles.bgGlow} />

      {loading && (
        <div className={styles.state}>
          <div className={styles.spinner} />
          <p className={styles.stateText}>Carregando...</p>
        </div>
      )}

      {error && (
        <div className={styles.state}>
          <p className={styles.errorText}>⚠ {error}</p>
          <button className={styles.backBtn} onClick={() => router.push('/')}>
            ← Voltar
          </button>
        </div>
      )}

      {!loading && !error && movie && (
        <MovieDetail movie={movie} />
      )}
    </div>
  )
}
