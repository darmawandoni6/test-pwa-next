import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/2",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>SWR</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
