import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Book from './components/Book';
import Footer from './components/Footer';

const App = () => {
  const [login, setLogin] = useState(false);
  const [reg, setReg] = useState(false);
  const [book, setBook] = useState(false);

  const getLogin = () => {
    console.log('set reg in body');
    setLogin(true);
    setReg(false);
  }
  const getReg = () => {
    console.log('set login in body');
    setLogin(false);
    setReg(true);
  }

  const toggleBook = () => {
    setBook(prevBook => !prevBook);
  };

  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  console.log(error);
  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error.toString()));
  }, []);

  return (
    <>
      <NavBar getLogin={getLogin} getReg={getReg} />
      {book && <Book />}
      <div className="App">
        <Login show={login} />
        <Register show={reg} />
        {data.map((item) => (
          <Cards 
            key={item.id}
            id={item.id}
            type={item.type}
            price={item.price}
            status={item.status}
            imgUrl={item.imgUrl}
            togel={toggleBook}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default App;
