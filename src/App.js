import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header'
import MovieCatalogue from './MovieCatalogue';
import MovieInfo from './MovieInfo';

function App() {
  return (
    <div className="wrapper">
      <Link to="/">
        <Header />
      </Link>
      <Routes>
        <Route path="/" element={<MovieCatalogue />} />
        <Route path="/:movieId" element={<MovieInfo />} />
      </Routes>

    </div >
  );
}

export default App;
