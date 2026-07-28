import React from "react";

//internal import
import "./styles.css";
import { Pana } from "..";

function Blog() {
  return (
    <>
      <div className="calendar">
        <img src={Pana} alt="a woman touching computer screen" />

        <div>
          <h2 className="d2">
            How to design your site footer like{" "}
            <span className="d2-span">we did</span>
          </h2>

          <p className="d3">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
        </div>
        <button className="learn">Learn More</button>
      </div>
    </>
  );
}

export default Blog;
