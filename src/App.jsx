import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter';
import Galleria from './components/Galleria';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Again from './components/Again'
import HarrySpotter from './components/HarrySpotter'
import Account from './components/Account'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails'


function App() {
  return(
    <BrowserRouter>
    <div className="d-flex flex-column min-vh-100 bg-dark">
       <MyNav tema="dark"/>
  <main className="flex-grow-1">
    <div className='=flex-grow-1'>
    <Routes>
  <Route path="/" element={
  <>
    <Galleria/>
    <Again galleryTitle="The Lord of the Rings" />
    <HarrySpotter/>
    <MovieDetails/>
  </>
}/>
</Routes>
    </div>
  </main>
  <MyFooter/>
  </div>
  </BrowserRouter>
  );
}

export default App
