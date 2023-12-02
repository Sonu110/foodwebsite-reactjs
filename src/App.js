
import { Route, Routes } from 'react-router-dom';
import './App.css';
import  HomeContainer  from './pages/Home/HomeContainer';
import Header from './components/Header';
import Details from './pages/Productdetails/Details';
import { CartTwo } from './pages/Cart/Cart';




function App() {
  return (
    <>
      <Header></Header>
     
    <Routes>
    <Route  path='/' element={<HomeContainer></HomeContainer>}>  </Route>
    
    <Route path='details/:name/:id' element={<Details></Details>}></Route>
    <Route path='/cart' element={<CartTwo></CartTwo>}></Route>
    
    


    </Routes>
    
    
    </>
  );
}

export default App;
