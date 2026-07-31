import React from "react";

//internal import
import "./styles.css";
import { Members, Clubs, Event, Payments } from "..";

function Community() {
  return (
    <>
      <div className="achievement">
        <div className="local">
          <p className="local-p">
            Helping a local{" "}
            <span className="local-span">business reinvent itself</span>
          </p>
          <p className="dedi">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="count">
          <div className="row1">
            <img src={Members} alt="numbers of the members" />
            <div className="members">
              <p>2,245,341 </p>
              <span>Members</span>
            </div>
          </div>

          <div className="row1">
            <img src={Clubs} alt="numbers of the members" />
            <div className="members">
              <p>2,245,341 </p>
              <span>Clubs</span>
            </div>
          </div>

          <div className="row1">
            <img src={Event} alt="numbers of the members" />
            <div className="members">
              <p>2,245,341 </p>
              <span>Event</span>
            </div>
          </div>

          <div className="row1">
            <img src={Payments} alt="numbers of the members" />
            <div className="members">
              <p>2,245,341 </p>
              <span>Payments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community;
