import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

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
  return (
    <div className="main" id="features">
      <h2 className="h22">Our Clients</h2>
      <p className="desc">
        We have been working with some fortune 500+ clients
      </p>

      <Swiper
        className="logo-carousel"
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={6000}
        allowTouchMove={false}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <img src={Vector} alt="vector-logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo1} alt="logo1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo2} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo3} alt="logo3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo4} alt="logo4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo5} alt="logo5" />
        </SwiperSlide>
        /*Duplicate the slides to create a continuous loop effect */
        <SwiperSlide>
          <img src={Vector} alt="vector-logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo1} alt="logo1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo2} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo3} alt="logo3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo4} alt="logo4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo5} alt="logo5" />
        </SwiperSlide>
      </Swiper>

      <h2 className="manage-entire">
        Manage your entire community
        <br />
        in a single system
      </h2>
      <p className="para">Who is Nextcent suitable for?</p>

      <div className="frame">
        <div className="card">
          <div className="icon-img">
            <img src={Icon} alt="icon" />
            <h2 className="h2">
              Membership <br />
              Organisations
            </h2>
          </div>
          <p className="para1">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="card">
          <div className="icon-img">
            <img src={Icon1} alt="icon" />
            <h2 className="h2">
              National <br />
              Associations
            </h2>
          </div>
          <p className="para2">
            Our membership management software provides full automation of
            membership renewals and <br />
            payments
          </p>
        </div>

        <div className="card">
          <div className="icon-img">
            <img src={Icon2} alt="icon" />
            <h2 className="h2">
              Clubs And <br />
              Groups
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
            <br /> years at Pixelgrade
          </p>
          <p className="frame6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="learn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Features;
