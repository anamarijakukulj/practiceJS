import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/RegisterWrap";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const RegisterPage = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.prebentDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>

          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>

          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>

          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default RegisterPage;
