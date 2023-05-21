import { useNavigate } from "react-router-dom";
import "./index.css";
import { BeatLoader } from "react-spinners";
import error404 from "../../img/error404.png";

const Error = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 4000);

  return (
    <div className="error-container">
      <img className="error-img" src={error404} alt="" />
      <BeatLoader size={30} color="#36d7b7" />
    </div>
  );
};

export default Error;
