import React from "react";
import MainNaviagation from "../components/MainNaviagation";

const Error = () => {
  return (
    <>
      <MainNaviagation />
      <main>
        <h1>An error occured!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
};

export default Error;
