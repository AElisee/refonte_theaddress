import React from "react";

const Medias = () => {
  return (
    <div className="medias flex justify-between">
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="with-fcb flex align-center justify-center gap-10"
      >
        <img src="/icons/Facebook.svg" alt="" />
      </a>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="with-email flex align-center justify-center gap-10"
      >
        <img src="/icons/Gmail.svg" alt="" />
      </a>
    </div>
  );
};

export default Medias;
