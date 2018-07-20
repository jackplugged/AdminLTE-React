import React from "react";

const MainContentWrapper = ({ children }) => (
    <div className="content-wrapper">
    <section className="content">
       {children}
     </section>
  </div>
);

export default MainContentWrapper;