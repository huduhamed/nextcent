import React, { useState } from "react";

//internal import
import "./styles.css";
import {
  Vector,
  Icon,
  Icon1,
  Icon2,
  Logo,
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Rafiki,
  Members,
  Clubs,
  Event,
  Payments,
  Pana,
} from "..";

function Features() {
  const [learnMore, setLearnMore] = useState(false);

  return (
    <div className="main">
      <h1 className="h1" id="features">
        Our Clients
      </h1>

      <p className="desc">
        We have been working with some fortune 500+ clients
      </p>

      <div className="logo-image">
        <img src={Vector} alt="vector-logo" />
        <img src={Logo} alt="logo" />
        <img src={Logo1} alt="logo" />
        <img src={Logo2} alt="logo" />
        <img src={Logo3} alt="logo" />
        <img src={Logo4} alt="logo" />
        <img src={Logo5} alt="logo" />
      </div>

      <h2>
        Manage your entire community
        <span className="span">in a single system</span>
      </h2>

      <p className="para">Who is Nextcent suitable for?</p>

      <div className="frame">
        <div className="membership">
          <div className="icon-img">
            <img src={Icon} alt="icon" />
            <h2 className="h2">
              Membership <span className="member-span">Organisations</span>
            </h2>
          </div>
          <p className="para1">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="national">
          <div className="icon-img">
            <img src={Icon1} alt="icon" />
            <h2 className="h2">
              National <span className="asso-span">Associations</span>
            </h2>
          </div>
          <p className="para2">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="nat">
          <div className="icon-img">
            <img src={Icon2} alt="icon" />
            <h2 className="h2">
              Clubs And <span className="nat-span">Groups</span>
            </h2>
          </div>
          <p className="para3">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>

      <div className="unlock">
        <img src={Rafiki} alt="human infront of a computer" />

        <div className="frames">
          <p className="frame5">
            The unseen of spending three
            <span className="frame-span"> years at Pixelgrade</span>
          </p>

          <p className="frame6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>

          <button className="learn" onClick={() => setLearnMore(!learnMore)}>
            {learnMore ? "Show Less" : "Learn More"}
          </button>

          {learnMore && <p>Here is some additional information.</p>}
        </div>
      </div>
    </div>
  );
}

export default Features;
