import style from "./App.module.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(`${URL}?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }
  useEffect(() => {
    !access && navigate("/");
  },[access]);

  const onSearch = (id) => {
    if (characters.find((char) => char.id === id)) {
      return alert("Este personaje esta repetido");
    }

    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== parseInt(id)));
  };
  return (
    <div className={style.App}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
