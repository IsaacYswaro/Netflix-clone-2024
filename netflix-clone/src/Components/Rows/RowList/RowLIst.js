import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

const RowLIst = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
  
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvshow} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default RowLIst