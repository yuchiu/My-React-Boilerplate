import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const NotFoundPage = ({
  match: {
    params: { unfoundLocation = "" }
  }
}) => (
  <div className="not-found-page">
    <main className="not-found-page-header">
      <h1 className="not-found-page-header__title">
        Oops... location "{unfoundLocation}" is not found.{" "}
      </h1>
    </main>
  </div>
);

NotFoundPage.propTypes = {
  match: PropTypes.object
};

export default NotFoundPage;
