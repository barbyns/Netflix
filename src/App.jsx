import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter';
import Galleria from './components/Galleria';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



function App() {
  return(
    <div className="d-flex flex-column min-vh-100 bg-dark">
       <MyNav tema="dark"/>
  <main className="flex-grow-1">
    <Galleria/>
  </main>
  <MyFooter/>
  </div>
  );
}

export default App
