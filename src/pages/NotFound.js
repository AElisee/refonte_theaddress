import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title> ERREUR - page introuvable</title>
        <meta name="description" content="Description de ma page" />
      </Helmet>
      <h1>Aïe ! quelque chose s'est mal passé</h1>
      <p>Nous n'avons pas trouvé la page </p>
    </div>
  );
};

export default NotFound;
