import React from "react";

const Dokumen = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Dokumen</h1>
      <ol>
        {/* {data.results.map((item) => (
          <li key={item.url}>{item.name}</li>
        ))} */}
      </ol>
    </div>
  );
};

export default Dokumen;
