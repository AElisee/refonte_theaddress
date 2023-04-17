import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const Confirmation = () => {
  const token = useParams();
  console.log(token.token);

  axios
    .get(`http://192.168.1.32:5000/api/auth/confirmation/${token.token}`)
    .then((res) => console.log("response " + res))
    .catch((err) => console.log("erreur :" + err));

  return (
    <div className="confirmation">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsa.
      </p>
    </div>
  );
};

export default Confirmation;
