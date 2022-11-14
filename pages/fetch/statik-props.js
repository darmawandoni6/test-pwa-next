import axios from "axios";

export async function getStaticProps(context) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/1`
  );
  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <>
      <h1>getStaticProps</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}
