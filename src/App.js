// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cards from './components/Cards';
import CardsFood from './components/CardsFood';
import CardsDetails from './components/CardsDetails';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/:cuisine" exact element={<Cards />} />
      <Route path="/search/:food" exact element={<CardsFood />} />
      <Route path="/cart/:id" exact element={<CardsDetails />} />
    </Routes>
    </>
  );
}

export default App;
