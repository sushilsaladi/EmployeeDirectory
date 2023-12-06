import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Books from './components/Books';
import Increment from './components/Increment';
import Todo from './components/Todo';
import Login from './components/Login';
import { createContext,useState } from 'react';
import Telephone from './components/Telephone';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppContext = createContext(null);

function App() {

  const [userName , setUserName] = useState("");

  return (
    <AppContext.Provider value={{userName,setUserName}}>
    <div className="App">
      <>
        <nav className='w-100 bg-dark text-white'>
          <ul className="d-flex justify-content-evenly">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/counter">Increment</Link></li>
            <li><Link to="/todo">Todo</Link></li>
            <li><Link to="/telephone">Telephone</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/books' element={<Books></Books>}></Route>
          <Route path='/counter' element={<Increment></Increment>}></Route>
          <Route path='/todo' element={<Todo></Todo>}></Route>
          <Route path='/telephone' element={<Telephone></Telephone>}></Route>
        </Routes>
      </>
    </div>
    </AppContext.Provider>
  );
}

export default App;
