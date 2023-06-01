import { Link } from "react-router-dom";
import image from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorWrap";

const ErrorPage = () => {
  return (
    <Wrapper classname="full-page">
      <div>
        <img src={image} alt="not found" />

        <h3>Ohh, Page NotFound</h3>

        <p>We can't seem to find the page you're looking for</p>

        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
