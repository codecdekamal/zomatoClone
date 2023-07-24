import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <Link
        to={props.url}
        className="text-decoration-none  underline card w-25 rounded-3 mt-3 pointer-event col-lg m-2 align-content-md-start object-fit-lg-fill shadow pointer-event pe-auto "
      >
        <img
          className="img-fluid rounded-2 mt-auto mb-auto "
          src="https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="orderOnline"
        />
        <h4>{props.heading}</h4>
        <p className="justify-content-center text-capitalize  ">
          {props.text}{" "}
        </p>
        <div className="card-body"></div>
      </Link>
    </>
  );
};

export default Card;
