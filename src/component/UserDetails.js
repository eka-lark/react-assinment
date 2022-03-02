import React, { useState } from "react";
import { useNavigate } from "react-router";

const Detailed = (props) => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  const [name, setname] = useState(localStorage.getItem("name"));
  const [img, setnmg] = useState(localStorage.getItem("img"));
  const [url, seturl] = useState(localStorage.getItem("url"));

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h4>User Details...</h4>
      </div>
      <div className="userdetails">
        <div
          className="user"
          style={{
            height: "380px",
            width: "380px",
            border: "1px solid grey",
            marginTop: "50px",
            padding: 4,
          }}
        >
          <h5>
            <img src={img} alt={name} width="180px" height="180px" />
          </h5>
          <h5>Display Name:- {name}</h5>
          <h5>
            Profile URL:- <a href={url}> {url} </a>
          </h5>
          <h5>
            <button onClick={back}>Back</button>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
