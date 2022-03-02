import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const List = (props) => {
  const navigate = useNavigate();
  const { users } = props;

  //check if user exist or not
  if (!users || users.length === 0) {
    return <div>Please search GitHub users...</div>;
  }

  const userInfo = async (user) => {
    const user_Info = await axios.get(`https://api.github.com/users/${user}`);

    localStorage.setItem("name", user_Info.data.login);

    localStorage.setItem("url", user_Info.data.html_url);

    localStorage.setItem("img", user_Info.data.avatar_url);
    console.log("name--", user_Info);

    navigate("/details");
  };

  return (
    <div className="userlist">
      <div>
        <h4>All GitHub Users</h4>
      </div>
      <div
        style={{
          border: "1px solid grey",
          width: "400px",
          height: "500px",
          overflow: "auto",
          alignItems: "center",
          display: "grid",
        }}
      >
        <table>
          {users.items.map((user) => {
            return (
              <tr key={user.id} style={{ cursor: "pointer", color: "blue" }}>
                <td>
                  <span
                    onClick={() => {
                      userInfo(user.login);
                    }}
                  >
                    {user.login}
                  </span>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default List;
