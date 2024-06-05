import React from "react";
import "./RightSidebar.css";
import post1 from "../assets/post1.png";
import post11 from "../assets/post11.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";
import post4 from "../assets/post4.png";
import post5 from "../assets/post5.png";
import post12 from "../assets/post12.png";
import post13 from "../assets/post13.png";
import post14 from "../assets/post14.png";

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="content">
        <span>
          <strong>Artists</strong>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ color: "gray" }}>Photographers</span>
      </div>

      <div className="featured-users">
        <div className="user">
          <img src={post1} height={127} alt="User" />
          <div className="childUser">
            <img src={post11} height={48} alt="" />
            <div className="text">
              {" "}
              <div className="name">Thomas Edward</div>
              <div> @thewildwithyou</div>
            </div>
          </div>
        </div>
        <div className="user">
          <img src={post2} height={127} alt="User" />
          <div className="childUser">
            <img src={post12} height={48} alt="" />
            <div className="text">
              {" "}
              <div className="name">Chris Doe</div>
              <div> @thewildwithyou</div>
            </div>
          </div>
        </div>
        <div className="user">
          <img src={post3} height={127} alt="User" />
          <div className="childUser">
            <img src={post13} height={48} alt="" />
            <div className="text">
              {" "}
              <div className="name">Emilie Jones</div>
              <div> @thewildwithyou</div>
            </div>
          </div>
        </div>
        <div className="user">
          <img src={post4} height={127} alt="User" />
          <div className="childUser">
            <img src={post14} height={48} alt="" />
            <div className="text">
              {" "}
              <div className="name">Jessica Wiliams</div>
              <div> @thewildwithyou</div>
            </div>
          </div>
        </div>
      </div>
      <div className="user">
        <img src={post5} height={67} width={247} alt="User" />
        <div className="credits">
          <div>Privacy</div>
          <div>Terms of Service</div>
          <div>Cookie Notice</div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
