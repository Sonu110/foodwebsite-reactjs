
import { Route, Routes } from 'react-router-dom';
import './App.css';
import  HomeContainer  from './pages/Home/HomeContainer';
import Header from './components/Header';
import Details from './pages/Productdetails/Details';
import { CartTwo } from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Protexted from './pages/Protextedrouter/Protexted';
import { Mycontext } from './Context/Context';
import { useContext } from 'react';
import { SignUpThree } from './pages/Login/Signup';
import Searchpage from './pages/Searchbar/Searchpage';




function App() {

const {auth}= useContext(Mycontext)
  return (
    <>
      <Header></Header>
     
    <Routes>
    <Route  path='/' element={<HomeContainer></HomeContainer>}>  </Route>
    
    <Route path='details/:name/:id' element={<Details></Details>}></Route>

        <Route path='/cart' element={<Protexted user={auth}></Protexted>}>
          <Route path='' element={<CartTwo></CartTwo>}></Route>
        </Route>
    <Route path='/signup' element={<SignUpThree></SignUpThree>}></Route>
    <Route path='/login' element ={<Login></Login>}></Route>
<Route path='/search' element={<Searchpage></Searchpage>}></Route>

    <Route path='*' element={<><div>error</div></>}></Route>
    </Routes>
    

    </>
  );
}

export default App;
