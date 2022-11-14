// Incremental Static Regeneration
export async function getStaticProps() {
  return {
    props: {
      time: new Date().toISOString(),
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 10, // In seconds
  };
}

export default function index({ time }) {
  return (
    <>
      <h1>Incremental Static Regeneration</h1>
      <h1>{time}</h1>;
    </>
  );
}
