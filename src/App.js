import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';

import requests from './requests';
function App() {
  return (
    <div className="app">
      {/*  Nav  */}
      <Nav />
      <Banner />
      <Row title="NEWFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Monies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
