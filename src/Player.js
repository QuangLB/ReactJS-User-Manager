import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
export default function Player(props) {
  const [items, setItems] = useState([]);
  const history = useHistory();
  const removePlayer = async (id) => {
    console.log(id);
    try {
      axios.delete(
        "https://615d1b3ec298130017736401.mockapi.io/ttcn/players/" + id
      );
      history.push("/players");
    } catch (error) {}
  };

  useEffect(() => {
    fetch("https://615d1b3ec298130017736401.mockapi.io/ttcn/players")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-light table-striped table-sm table-hover">
      <thead>
        <tr>
          <th >ID</th>
          <th >Tên </th>
          <th >Tuổi</th>
          <th >Câu lạc bộ</th>
        </tr>
      </thead>

      <tbody>
        {items.map((items) => (
          
            <tr table-active key={items.id}>
              <td>{items.id}</td>
              <td>
                <Link class="btn btn-null" to={"/detail/" + items.id}>{items.name}</Link>
              </td>
              <td>
                <button
                  onClick={() => removePlayer(items.id)}
                  className="btn btn-outline-danger"
                >
                  Xóa
                </button>
              </td>
              <td>
                <Link
                  className="btn btn-outline-info"
                  to={"/editplayers/" + items.id}
                >
                  Edit
                </Link>
              </td>
            </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}
