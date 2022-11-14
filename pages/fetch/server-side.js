import axios from "axios";
import React from "react";

const index = ({ data }) => {
  return (
    <>
      <h1>getServerSideProps</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/2"
  );
  return { props: { data } };
}

export default index;
