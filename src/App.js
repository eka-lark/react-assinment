import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import "./App.css";
import List from "./component/UserList";
import Detailed from "./component/UserDetails";

function Search() {
  const [Data, setData] = useState();
  const q = React.createRef();

  const SearchUser = async () => {
    const url = `https://api.github.com/search/users?q=${q.current.value}`;

    await axios.get(url).then((users) => {
      setData(users.data);
    });
  };

  const clear = () => {
    document.getElementById("search").value = "";
  };

  return (
    <div className="App">
      <div
        className="App-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:'50px',
          alignSelf:'center',
        }}
      >
        <input
          type="text"
          ref={q}
          placeholder="user name"
          id="search"
          style={{ marginRight: 8 }}
        />
        <button onClick={SearchUser} style={{ marginRight: 8 }}>
          Search
        </button>
        <button onClick={clear}>Clear</button>
      </div>
      <div className="user-container">
        <List users={Data} />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route path="/details" element={<Detailed />} />
          <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
