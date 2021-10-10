import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { add } from "./API/playerAPI";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Addplayers = (props) => {
  function notify() {
    toast.dark("Hey 👋, see how easy!");
  }
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (players) => {
    try {
      const { data } = await add(players);
      console.log(data);
      // props.onAdd(data);
      // history.push("/players");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div align="center">
      <h2 style={{ color:"#426ec7"}}>Add player</h2>
      <br/>
    <form style={{ width: "32%" }} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Input Name"
          />
          {errors.name && <span>Field name is require</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Age
          </label>
          <input
            type="number"
            {...register("age", { required: true })}
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Input Age"
          />
          {errors.age && <span>Field age is require</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Club
          </label>
          <input
            type="text"
            {...register("club", { required: true })}
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Input club"
          />
          {errors.club && <span>Field club is require</span>}
        </div>
        <button type="submit" className="btn btn-outline-warning">
          Add
        </button>
      </div>
    </form>
    </div>
  );
};
export default Addplayers;
