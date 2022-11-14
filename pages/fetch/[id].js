// `getStaticPaths` requires using `getStaticProps`

import axios from "axios";
import React from "react";

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const { id } = context.params;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return { props: { data } };
}

const index = ({ data }) => {
  return (
    <>
      <h1>getStaticPaths</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default index;
