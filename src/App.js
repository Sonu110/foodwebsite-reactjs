
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeContainer } from './components';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header></Header>
    <Routes>
      <Route path='/' element={<HomeContainer></HomeContainer>}></Route>




    </Routes>
    
    
    </>
  );
}

export default App;
