import { Link } from "react-router-dom";

//internal import
import "./styles.css";
import {
  Tesla,
  Vector,
  Logo,
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Image,
  Image19,
  Image20,
} from "..";

function Pricing() {
  return (
    <>
      <div className="pricing-container">
        <div className="pricing">
          <img src={Tesla} alt="tesla logo" />

          <div className="content">
            <p>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <p className="tim">Tim Smith</p>
            <p className="dra">British Dragon Boat Racing Association</p>
          </div>
        </div>

        <div className="frame10">
          <img src={Vector} alt="logo" className="vec1" />
          <img src={Logo} alt="logo" />
          <img src={Logo1} alt="logo" />
          <img src={Logo2} alt="logo" />
          <img src={Logo3} alt="logo" />
          <img src={Logo4} alt="logo" />
          <a className="customers">Meet all customers →</a>
        </div>

        <div className="container-pricing">
          <div className="comm1">
            <h2 className="care">Caring is the new marketing</h2>
            <p className="nex">
              The Nextcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </p>
          </div>

          <div id="images-container">
            <div className="frame15">
              <img src={Image} alt="a woman browsing" />
              <div className="background-text">
                <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                <a href="/readmore">Readmore →</a>
              </div>
            </div>
            <div className="frame15">
              <img src={Image19} alt="a woman browsing" />
              <div className="background-text">
                <p>
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </p>
                <a href="/readmore">Readmore →</a>
              </div>
            </div>
            <div className="frame15">
              <img src={Image20} alt="a woman browsing" />
              <div className="background-text">
                <p>
                  Revamping the Membership <br />
                  Model with Triathlon <br />
                  Australia
                </p>
                <a href="/readmore">Readmore →</a>
              </div>
            </div>
          </div>

          <div className="lib">
            <h2 className="pell">
              Pellentesque suscipit <br />
              fringilla libero eu.
            </h2>
            <button className="btn3">Get a Demo →</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
