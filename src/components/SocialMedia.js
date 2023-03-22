import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <h4>SUIVEZ-NOUS</h4>
      <div className="social-media-icons">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
