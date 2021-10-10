import { useParams,useHistory  } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { get, update } from "./API/playerAPI";
import axios from "axios";
export default function Edit(props) {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [player, setPlayer] = useState({});
  const history = useHistory();
  useEffect(() => {
    get(id).then((response) => {
      setPlayer(response.data);
      reset(response.data);
    });
  }, [reset]);

  const onSubmit = (data) => {
    const player = {
      id: id,
      ...data
    };
    console.log(data)
    try {
      axios.put(
        "https://615d1b3ec298130017736401.mockapi.io/ttcn/players/" + id,
        data
      );
      alert("Sửa đổi thành công");
      history.push("/players");
    } catch (error) {}
  };

  return (
    <div align="center">
    <form style={{ width: "32%" }} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={player.name}
            {...register("name")}
            id="formGroupExampleInput"
          />
          <br />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Age
          </label>
          <input
            type="number"
            defaultValue={player.age}
            {...register("age")}
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Club
          </label>
          <input
            type="text"
            defaultValue={player.club}
            {...register("club")}
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <button type="submit" className="btn btn-outline-warning">
          Edit
        </button>
      </div>
    </form>
    </div>
  );
}
