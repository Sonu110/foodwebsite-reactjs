
import { Route, Routes } from 'react-router-dom';
import './App.css';
import  HomeContainer  from './pages/Home/HomeContainer';
import Header from './components/Header';
import Details from './pages/Productdetails/Details';

function App() {
  return (
    <>
      <Header></Header>
    <Routes>
    <Route path='/' element={<HomeContainer></HomeContainer>}></Route>
    
    <Route path='/details/:name/:id' element={<Details></Details>}></Route>




    </Routes>
    
    
    </>
  );
}

export default App;
