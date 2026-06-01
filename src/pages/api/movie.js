const TWILIGHT_DATA = {
  tt1099212: {
    imdbID: 'tt1099212',
    Title: 'Twilight',
    ptTitle: 'Crepúsculo',
    Year: '2008',
    order: 1,
    Rated: 'PG-13',
    Released: '21 Nov 2008',
    Runtime: '122 min',
    Genre: 'Drama, Fantasy, Romance',
    Director: 'Catherine Hardwicke',
    Writer: 'Melissa Rosenberg',
    Actors: 'Kristen Stewart, Robert Pattinson, Billy Burke',
    Plot: 'Quando Bella Swan se muda para a pequena e chuvosa cidade de Forks, em Washington, sua vida muda completamente ao se apaixonar por Edward Cullen, um misterioso garoto que esconde o segredo de ser um vampiro — e que se esforça para não sucumbir ao desejo de seu sangue.',
    Language: 'English',
    Country: 'United States',
    Awards: '2 wins & 28 nominations',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_SX300.jpg',
    imdbRating: '5.2',
    imdbVotes: '408,000',
    BoxOffice: '$192,769,854',
    Response: 'True',
  },
  tt1259571: {
    imdbID: 'tt1259571',
    Title: 'The Twilight Saga: New Moon',
    ptTitle: 'Lua Nova',
    Year: '2009',
    order: 2,
    Rated: 'PG-13',
    Released: '20 Nov 2009',
    Runtime: '130 min',
    Genre: 'Drama, Fantasy, Romance',
    Director: 'Chris Weitz',
    Writer: 'Melissa Rosenberg',
    Actors: 'Kristen Stewart, Robert Pattinson, Taylor Lautner',
    Plot: 'Após Edward deixar Bella para protegê-la do mundo vampírico, ela mergulha em uma profunda depressão. A amizade com Jacob Black — que esconde ser um lobisomem — traz alívio, mas novos perigos surgem quando a saga se intensifica.',
    Language: 'English',
    Country: 'United States',
    Awards: '1 win & 15 nominations',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDMzNDkxNTgwNV5BMl5BanBnXkFtZTcwMDM5NjMwMg@@._V1_SX300.jpg',
    imdbRating: '4.6',
    imdbVotes: '331,000',
    BoxOffice: '$296,623,634',
    Response: 'True',
  },
  tt1325004: {
    imdbID: 'tt1325004',
    Title: 'The Twilight Saga: Eclipse',
    ptTitle: 'Eclipse',
    Year: '2010',
    order: 3,
    Rated: 'PG-13',
    Released: '30 Jun 2010',
    Runtime: '124 min',
    Genre: 'Drama, Fantasy, Romance',
    Director: 'David Slade',
    Writer: 'Melissa Rosenberg',
    Actors: 'Kristen Stewart, Robert Pattinson, Taylor Lautner',
    Plot: 'Bella é colocada no centro de um confronto épico entre vampiros e lobisomens enquanto toma a decisão mais importante de sua vida: permanecer humana ou juntar-se a Edward para sempre.',
    Language: 'English',
    Country: 'United States',
    Awards: '2 wins & 15 nominations',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjA1OTYxMDEyNV5BMl5BanBnXkFtZTcwNzQ2NDcwNA@@._V1_SX300.jpg',
    imdbRating: '4.9',
    imdbVotes: '318,000',
    BoxOffice: '$300,531,751',
    Response: 'True',
  },
  tt1324999: {
    imdbID: 'tt1324999',
    Title: 'The Twilight Saga: Breaking Dawn - Part 1',
    ptTitle: 'Amanhecer – Parte 1',
    Year: '2011',
    order: 4,
    Rated: 'PG-13',
    Released: '18 Nov 2011',
    Runtime: '117 min',
    Genre: 'Drama, Fantasy, Romance',
    Director: 'Bill Condon',
    Writer: 'Melissa Rosenberg',
    Actors: 'Kristen Stewart, Robert Pattinson, Taylor Lautner',
    Plot: 'O casamento de Bella e Edward inaugura uma nova fase repleta de perigos. Uma gravidez inesperada desafia todas as regras do mundo sobrenatural e ameaça a trégua entre vampiros e lobisomens.',
    Language: 'English',
    Country: 'United States',
    Awards: '1 win & 9 nominations',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjA3NTMyMDQ3MV5BMl5BanBnXkFtZTcwNTEyNTgyNQ@@._V1_SX300.jpg',
    imdbRating: '4.9',
    imdbVotes: '298,000',
    BoxOffice: '$281,287,133',
    Response: 'True',
  },
  tt1673434: {
    imdbID: 'tt1673434',
    Title: 'The Twilight Saga: Breaking Dawn - Part 2',
    ptTitle: 'Amanhecer – Parte 2',
    Year: '2012',
    order: 5,
    Rated: 'PG-13',
    Released: '16 Nov 2012',
    Runtime: '115 min',
    Genre: 'Drama, Fantasy, Romance',
    Director: 'Bill Condon',
    Writer: 'Melissa Rosenberg',
    Actors: 'Kristen Stewart, Robert Pattinson, Taylor Lautner',
    Plot: 'Bella desperta como vampira e descobre um novo mundo de sentidos apurados. A família Cullen deve enfrentar os poderosos Volturi em uma batalha épica que decidirá o destino de todos — humanos, vampiros e lobisomens.',
    Language: 'English',
    Country: 'United States',
    Awards: '1 win & 11 nominations',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTMyMzE4NzYxNV5BMl5BanBnXkFtZTcwNjMyNTkxOA@@._V1_SX300.jpg',
    imdbRating: '5.6',
    imdbVotes: '332,000',
    BoxOffice: '$292,324,737',
    Response: 'True',
  },
}

export default async function handler(req, res) {
  const { id } = req.query
  const API_KEY = 'trilogy'

  if (!id) {
    return res.status(400).json({ error: 'ID do filme é obrigatório.' })
  }

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}&plot=full`,
      { signal: AbortSignal.timeout(3000) }
    )
    const data = await response.json()

    if (data.Response === 'True') {
      const local = TWILIGHT_DATA[id] || {}
      return res.status(200).json({
        ...data,
        ptTitle: local.ptTitle,
        order: local.order,
      })
    }
  } catch {

  }

  const local = TWILIGHT_DATA[id]
  if (local) {
    return res.status(200).json(local)
  }

  return res.status(404).json({ error: 'Filme não encontrado.' })
}
