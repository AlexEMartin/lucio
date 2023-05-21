import { useNavigate } from "react-router-dom";
import "./Error404.css";
import { BeatLoader } from "react-spinners";
import error from "../../img/error404.png";

const Error404 = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 4000);

  return (
    <div className="error-container">
      <img className="error-img" src={error} alt="" />
      <BeatLoader size={30} color="#36d7b7" />
    </div>
  );
};

export default Error404;
