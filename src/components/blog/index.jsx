import React from "react";

//internal import
import "./styles.css";
import { Pana } from "..";

function Blog() {
  return (
    <>
      <div className="calendar">
        <img src={Pana} alt="a woman touching computer screen" />

        <div className="cal">
          <h2 className="like">
            How to design your site footer like <br />
            we did
          </h2>
          <p className="justo">
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
          <button className="learn1">Learn More</button>
        </div>
      </div>
    </>
  );
}

export default Blog;
