import React from "react";
// import "./social-media.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <h4>SUIVEZ-NOUS</h4>
      <div className="social-media-icons">
        <a
          href=" https://www.facebook.com/theaddressboutiqueabidjan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="net-icon" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=2250757101112"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="net-icon" />
        </a>
        <a
          href=" https://www.instagram.com/theaddressboutique_abidjan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="net-icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
