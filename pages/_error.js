import React from "react";

function Error({ statusCode, err }) {
  return (
    <>
      <h1>{statusCode}</h1>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  console.log("----", err);
  return { statusCode, err };
};

export default Error;
