import React, { useEffect, useState } from "react";

const Search = () => {
  const iData = [
    { name: "ABC", age: 20 },
    { name: "XYZ", age: 30 },
    { name: "TUV", age: 40 },
    { name: "SUV", age: 50 },
  ];
  const [data, setData] = useState(iData);
  const [search, setSearch] = useState();
  const searchInput = (e) => {
    const imp = e.target.value;
    if (imp) {
      setData(
        iData.filter((ele) => {
          return ele.age > imp;
        })
      );
    } else {
      setData(iData);
    }
  };
  useEffect(() => {
    console.log(data ? "ni" : "gh");
  });

  return (
    <div className="outer">
      <div className="inner">
        <h1>Age Filter</h1>
        <div className="row">
          <label htmlFor="search">Enter Age : </label>&nbsp;
          <input
            id="search"
            value={search}
            onChange={searchInput}
            type="number"
            step={1}
            min={0}
          />
        </div>
        <table border="1" className="table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
            {data.length !== 0 ? (
              data.map((ele) => {
                return (
                  <tr key={ele.name}>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="2">No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
