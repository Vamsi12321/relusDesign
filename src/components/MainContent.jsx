import React from "react";
import pexels from "../assets/pexels.png";
import post from "../assets/pexelspost.png";
import pexels2 from "../assets/pexels2.png";
import post2 from "../assets/pexelspost2.png";
import share from "../assets/share.png";
import heart from "../assets/heart@2x.png";
import comment from "../assets/comment@2x.png";
import fimage1 from "../assets/fimage1.png";
import fimage2 from "../assets/fimage2.png";
import fimage3 from "../assets/fimage3.png";
import fimage4 from "../assets/fimage4.png";
import star from "../assets/star.png";
function MainContent() {
  return (
    <div className="main-content">
      <div className="post">
        <div className="user-details">
          <img src={pexels} height={40} alt="Avatar" className="avatar" />
          <div>
            <strong>Lara Leones</strong>
            <br />
            @thewallart
          </div>
        </div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
          <b style={{ color: "red" }}>Read More</b>
        </p>
        <img src={post} height={310} alt="Post" />

        <div className="post-stats">
          <div>
            <img src={heart} height={20} alt="" />
            &nbsp;&nbsp;9.8k
          </div>
          <div>
            <img src={comment} height={20} alt="" />
            &nbsp;&nbsp;8.6k
          </div>
          <div>
            <img src={share} height={20} alt="" />
            &nbsp;&nbsp;7.2k
          </div>
        </div>
        <div className="like">
          <img src={heart} alt="" />
        </div>
      </div>

      <div className="post">
        <div className="user-details">
          <img src={pexels2} height={40} alt="Avatar" className="avatar" />
          <div>
            <strong>Lara Leones</strong>
            <br />
            @thewallart
          </div>
        </div>
        <p>
          {" "}
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
          <b style={{ color: "red" }}>Read More</b>
        </p>
        <img src={post2} height={310} alt="Post" />

        <div className="post-stats">
          <div>
            <img src={heart} height={20} alt="" />
            &nbsp;&nbsp;9.8k
          </div>
          <div>
            <img src={comment} height={20} alt="" />
            &nbsp;&nbsp;8.6k
          </div>
          <div>
            <img src={share} height={20} alt="" />
            &nbsp;&nbsp;7.2k
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-imgs">
          <div>
            <img src={fimage3} width={28} height={180} alt="" />
            <div style={{ marginTop: "49px" }}>
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
          <div>
            <img src={fimage1} width={252} height={180} alt="" />
            <div>
              <p>Modern Wall Decor Framed Painting</p>
            </div>

            <div className="rating">
              <div>
                <b>$199.99</b>
              </div>

              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div>
            <img src={fimage2} width={252} height={180} alt="" />
            <div>
              <p>Modern Wall Decor Framed Painting</p>
            </div>
            <div className="rating">
              <div>
                <b>$199.99</b>
              </div>

              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div>
            <img src={fimage4} width={28} height={180} alt="" />
            <div>
              <p style={{ marginTop: "49px" }}>
                <b>$1.9</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
