import { useHistory, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export default function Detail() {
  let history = useHistory();
  const { id } = useParams();
  const [player, setPlayer] = useState({});
  useEffect(() => {
    fetch("https://615d1b3ec298130017736401.mockapi.io/ttcn/players/" + id)
      .then((response) => response.json())
      .then((data) => {
        setPlayer(data);
      });
  }, []);
  return (

    <div className="detail" align="center">
      <div style={{ height: "5rem" }}></div>
      <div className="card" style={{ width: "70%" }}>
        <div className="card-body">
          <h5 className="card-title">Detail player</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> ID : {player.id}</li>
          <li className="list-group-item">Name : {player.name}</li>
          <li className="list-group-item">Age : {player.age}</li>
          <li className="list-group-item">Club : {player.club}</li>
        </ul>
      </div>
      <div style={{ height: "5rem" }}></div>
    </div>
  );
}
