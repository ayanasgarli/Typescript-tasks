import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NEWS | TIME</title>
        <link
          rel="icon"
          href="https://png.pngtree.com/png-clipart/20211017/original/pngtree-letter-t-logo-png-image_6854722.png"
        />
      </Helmet>
      <div className="container">
        <h1
          style={{
            color: "#e90606",
            margin: "10px",
            fontWeight: "900",
            fontSize: "42px",
          }}
        >
          NEWS
        </h1>
        <hr />
        <Grid
          container
          spacing={2}
          style={{ marginTop: "20px", alignItems: "center" }}
        >
          <Grid item xs={4}>
            <Typography
              variant="h3"
              style={{
                fontSize: "40px",
                fontFamily: "Georgia, Times, serif",
                fontWeight: "900",
                letterSpacing: "-2px",
                marginBottom: "15px",
              }}
            >
              He Was My Role Model. My Mentor. My Supplier.
            </Typography>
            <Typography
              style={{
                fontWeight: "600",
                fontSize: "16px",
                marginBottom: "15px",
              }}
            >
              Decades after I left hustling to become a writer, why did I seek
              out the man who drew me into that world?
            </Typography>
            <Typography
              style={{
                color: "hsla(0,0%,44.71%,1)",
                fontSize: "12px",
              }}
            >
              By MITCHELS S.JACKSON
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <img
              style={{ width: "790px", height: "610px" }}
              src="https://static01.nyt.com/images/2023/12/24/magazine/24mag-Lonnie-images/24mag-Lonnie-images-jumbo.jpg?auto=webp"
              alt="pic"
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">
              <img
                style={{ width: "380px", height: "300px" }}
                src="https://api.time.com/wp-content/uploads/2023/12/GettyImages-1243793918.jpg?quality=85&w=616&h=411&crop=1&resize=616,411"
                alt="pic"
              />
              <h5
                style={{
                  color: "rgb(40, 47, 47)",
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "26px",
                  letterSpacing: "-0.08px",
                  fontFamily: "Georgia, Times, serif",
                  marginTop: "25px",
                }}
              >
                Trump Case Draws Push For Thomas Recusal
              </h5>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.95)",
                  fontSize: "14px",
                  lineHeight: "22px",
                  letterSpacing: "-0.08px",
                  margin: "18px 0",
                }}
              >
                DECEMBER 20, 2023 • 4:43 PM EST
              </p>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">
              <img
                style={{ width: "380px", height: "300px" }}
                src="https://api.time.com/wp-content/uploads/2023/12/nj-helicopter-crash-abc.jpg?quality=85&w=616&h=411&crop=1&resize=616,411"
                alt="pic"
              />
              <h5
                style={{
                  color: "rgb(40, 47, 47)",
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "26px",
                  letterSpacing: "-0.08px",
                  fontFamily: "Georgia, Times, serif",
                  marginTop: "25px",
                }}
              >
                Action News Helicopter Crashes in New Jersey, Killing Two
              </h5>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.95)",
                  fontSize: "14px",
                  lineHeight: "22px",
                  letterSpacing: "-0.08px",
                  margin: "18px 0",
                }}
              >
                UPDATED: DECEMBER 21, 2023 • 3:23 PM EST
              </p>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">
              <img
                style={{ width: "380px", height: "300px" }}
                src="https://api.time.com/wp-content/uploads/2023/12/desktop-taylor-swift-person-of-the-year-3.jpg?quality=85&w=616&h=411&crop=1&resize=616,411"
                alt="pic"
              />
              <h5
                style={{
                  color: "rgb(40, 47, 47)",
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "26px",
                  letterSpacing: "-0.08px",
                  fontFamily: "Georgia, Times, serif",
                  marginTop: "25px",
                }}
              >
                Taylor Swift: Person of the Year 2023
              </h5>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.95)",
                  fontSize: "14px",
                  lineHeight: "22px",
                  letterSpacing: "-0.08px",
                  margin: "18px 0",
                }}
              >
                DECEMBER 14, 2023 • 7:55 PM EST
              </p>
            </Typography>
          </Grid>
          <h2
            style={{
              margin: "50px auto",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontWeight: "600",
              fontSize: "42px",
              color: "#e90606",
            }}
          >
            PUBLISHERS
          </h2>
        </Grid>
      </div>
      <Swiper
              watchSlidesProgress={true}
              slidesPerView={4}
              className="mySwiper"
            >
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </Swiper>
    </>
  );
}

export default Home;