import main from "../assets/images/main.svg";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/LandingWrap.js";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
            fringilla nibh. Vivamus lobortis auctor ultrices. In a nibh
            tristique, tristique arcu ac, aliquet risus. Morbi eget lacus ut leo
            elementum convallis. Morbi consectetur sit amet nulla vel
            ullamcorper. Mauris.
          </p>

          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
