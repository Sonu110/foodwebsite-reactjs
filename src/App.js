
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeContainer } from './components';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomeContainer></HomeContainer>}></Route>




    </Routes>
    
    
    </>
  );
}

export default App;
