import React, { useState } from "react";

//internal import
import "./styles.css";

function Register() {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit((currentSubmit) => {
      return !currentSubmit;
    });
  };

  return (
    <>
      <div className="register-form">
        <h1>Kindly fill out this form to get register to our site.</h1>

        <form className="form">
          <fieldset>
            <legend>Personal Information</legend>
            <label htmlFor="firstName">
              First Name:{" "}
              <input
                type="text"
                id="firstName"
                required
                placeholder="e.g. Dani"
              />
            </label>

            <label htmlFor="lastName">
              Second Name:{" "}
              <input
                type="text"
                id="LastName"
                required
                placeholder="e.g. Shitu"
              />
            </label>

            <label htmlFor="dob">
              Date of Birth:{" "}
              <input type="date" id="dob" required placeholder=" dd/mm/yyyy" />
            </label>

            <label htmlFor="age">
              Age:{" "}
              <input type="number" id="age" required placeholder="e.g. 8" />
            </label>

            <div className="gender">
              <p>Gender:</p>

              <label htmlFor="male">
                Male
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  required
                />
              </label>

              <label htmlFor="female">
                Female
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  required
                />
              </label>
            </div>

            <label htmlFor="phone">
              Phone:
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="e.g. 08012345678"
                required
              />
            </label>

            <label htmlFor="country">
              Country: <input type="text" id="country" required />
            </label>

            <label htmlFor="email">
              Email:{" "}
              <input
                type="email"
                id="email"
                placeholder="e.g. danishitu@gmail.com"
                required
              />
            </label>

            <label htmlFor="password">
              Password: <input type="password" id="password" required />
            </label>

            <label htmlFor="confirmPassword">
              Confirm Password:{" "}
              <input type="password" id="confirmPassword" required />
            </label>

            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>

            {submit && <p>Form submitted successfully!</p>}
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Register;
