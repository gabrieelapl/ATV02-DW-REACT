const TWILIGHT_DATA = [
  {
    imdbID: 'tt1099212',
    Title: 'Twilight',
    ptTitle: 'Crepúsculo',
    Year: '2008',
    order: 1,
    tagline: 'Quando o amor é mais forte que o instinto.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_SX300.jpg',
    imdbRating: '5.2',
    Genre: 'Drama, Fantasy, Romance',
    Runtime: '122 min',
    Director: 'Catherine Hardwicke',
    Actors: 'Kristen Stewart, Robert Pattinson, Billy Burke',
    Plot: 'Quando Bella Swan se muda para a pequena cidade de Forks, em Washington, ela se apaixona por Edward Cullen, um misterioso garoto que esconde um segredo sobrenatural.',
    Awards: '2 wins & 28 nominations',
    BoxOffice: '$192,769,854',
    Response: 'True',
  },
  {
    imdbID: 'tt1259571',
    Title: 'The Twilight Saga: New Moon',
    ptTitle: 'Lua Nova',
    Year: '2009',
    order: 2,
    tagline: 'O tempo cura todas as feridas... ou não.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDMzNDkxNTgwNV5BMl5BanBnXkFtZTcwMDM5NjMwMg@@._V1_SX300.jpg',
    imdbRating: '4.6',
    Genre: 'Drama, Fantasy, Romance',
    Runtime: '130 min',
    Director: 'Chris Weitz',
    Actors: 'Kristen Stewart, Robert Pattinson, Taylor Lautner',
    Plot: 'Após Edward deixar Bella para protegê-la, ela mergulha em depressão e encontra conforto na amizade com Jacob Black, um jovem que também esconde um segredo sobrenatural.',
    Awards: '1 win & 15 nominations',
    BoxOffice: '$296,623,634',
    Response: 'True',
  },
  {
    imdbID: 'tt1325004',
    Title: 'The Twilight Saga: Eclipse',
    ptTitle: 'Eclipse',
    Year: '2010',
    order: 3,
    tagline: 'Entre o amor e o perigo, a escolha é sua.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjA1OTYxMDEyNV5BMl5BanBnXkFtZTcwNzQ2NDcwNA@@._V1_SX300.jpg',
    imdbRating: '4.9',
    Genre: 'Drama, Fantasy, Romance',
    Runtime: '124 min',
    Director: 'David Slade',
    Actors: 'Kristen Stewart, Robert Pattinson, Taylor Lautner',
    Plot: 'Bella é colocada no centro de um confronto entre vampiros e lobisomens enquanto toma a decisão mais importante de sua vida.',
    Awards: '2 wins & 15 nominations',
    BoxOffice: '$300,531,751',
    Response: 'True',
  },
  {
    imdbID: 'tt1324999',
    Title: 'The Twilight Saga: Breaking Dawn - Part 1',
    ptTitle: 'Amanhecer – Parte 1',
    Year: '2011',
    order: 4,
    tagline: 'Uma nova vida. Uma nova era.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjA3NTMyMDQ3MV5BMl5BanBnXkFtZTcwNTEyNTgyNQ@@._V1_SX300.jpg',
    imdbRating: '4.9',
    Genre: 'Drama, Fantasy, Romance',
    Runtime: '117 min',
    Director: 'Bill Condon',
    Actors: 'Kristen Stewart, Robert Pattinson, Taylor Lautner',
    Plot: 'O casamento de Bella e Edward dá início a uma série de eventos que ameaça a frágil trégua entre vampiros e lobisomens.',
    Awards: '1 win & 9 nominations',
    BoxOffice: '$281,287,133',
    Response: 'True',
  },
  {
    imdbID: 'tt1673434',
    Title: 'The Twilight Saga: Breaking Dawn - Part 2',
    ptTitle: 'Amanhecer – Parte 2',
    Year: '2012',
    order: 5,
    tagline: 'O fim. O começo.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTMyMzE4NzYxNV5BMl5BanBnXkFtZTcwNjMyNTkxOA@@._V1_SX300.jpg',
    imdbRating: '5.6',
    Genre: 'Drama, Fantasy, Romance',
    Runtime: '115 min',
    Director: 'Bill Condon',
    Actors: 'Kristen Stewart, Robert Pattinson, Taylor Lautner',
    Plot: 'Bella desperta como vampira e a família Cullen enfrenta os Volturi em uma batalha épica que decidirá o destino de todos.',
    Awards: '1 win & 11 nominations',
    BoxOffice: '$292,324,737',
    Response: 'True',
  },
]

export default async function handler(req, res) {
  const API_KEY = 'trilogy'  

  try {
    const results = await Promise.all(
      TWILIGHT_DATA.map(async (localMovie) => {
        try {
          const response = await fetch(
            `https://www.omdbapi.com/?i=${localMovie.imdbID}&apikey=${API_KEY}`,
            { signal: AbortSignal.timeout(3000) }
          )
          const data = await response.json()
          if (data.Response === 'True') {
            return {
              ...data,
              ptTitle: localMovie.ptTitle,
              order: localMovie.order,
              tagline: localMovie.tagline,
            }
          }
          return localMovie
        } catch {
          return localMovie
        }
      })
    )

    res.status(200).json(results)
  } catch {
    res.status(200).json(TWILIGHT_DATA)
  }
}
