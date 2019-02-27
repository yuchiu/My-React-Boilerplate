import React from "react";

import "./index.scss";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PageWrapper = ({ children = "page wrapper" }) => (
  <React.Fragment>
    <Navbar />
    <div className="page-wrapper">{children}</div>
    <Footer />
  </React.Fragment>
);

export default PageWrapper;
