import React from "react";
import FetchData from "../Table/Table";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="col-md-10 mx-auto">
          <div className="headingSection text-center pt-4 text-uppercase">
            <h1>api task</h1>
            <hr className="container mb-5" />
          </div>
          <FetchData />
        </div>
      </div>
    </>
  );
};

export default Home;
