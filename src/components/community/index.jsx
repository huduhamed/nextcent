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
            <p className="members">
              2,245,341
              <span className="member-s">
                <label htmlFor="members">Members</label>
              </span>
            </p>

            <img src={Clubs} alt="numbers of the members" />
            <p className="clubs">
              46,328
              <span className="club-s">
                <label htmlFor="clubs">Clubs</label>
              </span>
            </p>
          </div>

          <div className="row2">
            <img src={Event} alt="numbers of the members" />
            <p className="event">
              828,867
              <span className="event-s">
                <label htmlFor="event">Event Bookings</label>
              </span>
            </p>

            <img src={Payments} alt="numbers of the members" />
            <p className="payments">
              1,926,436
              <span className="payment-s">
                <label htmlFor="payments">Payments</label>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community;
