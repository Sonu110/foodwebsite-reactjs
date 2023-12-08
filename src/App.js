
import { Route, Routes } from 'react-router-dom';
import './App.css';
import  HomeContainer  from './pages/Home/HomeContainer';
import Header from './components/Header';
import Details from './pages/Productdetails/Details';
import { CartTwo } from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Protexted from './pages/Protextedrouter/Protexted';




function App() {

  
  return (
    <>
      <Header></Header>
     
    <Routes>
    <Route  path='/' element={<HomeContainer></HomeContainer>}>  </Route>
    
    <Route path='details/:name/:id' element={<Details></Details>}></Route>

    <Route element={<Protexted user={false}></Protexted>}>

        <Route path='/cart' element={CartTwo}></Route>
        </Route>
    
    <Route path='/login' element ={<Login></Login>}></Route>


    <Route path='*' element={<><div>error</div></>}></Route>
    </Routes>
    

    </>
  );
}

export default App;
