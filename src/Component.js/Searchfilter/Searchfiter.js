import { React, useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://jsonplaceholder.typicode.com/users";

function Searchfiter() {
  const [postdata, setpostdata] = useState([]);
  const [searchdata, setsearchdata] = useState("");
  const [filterdata, setfilterdata] = useState([]);

  const getdata = async () => {
    try {
      const rsponse = await axios.get(apiURL);
      const data = await rsponse.data;
      setpostdata(data);
      setfilterdata(data);
      console.log(postdata);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  const handleSearch = () => {
    console.log(searchdata);
    filterdata = postdata.filter((value) => {
      value.name.includes(searchdata);
    });
  };

  //   axios.get("https://jsonplaceholder.typicode.com/posts");
  return (
    <div className="search-container w-100 h-100 row">
      {/* <InputComponent /> */}
      <div className="col-md-8 pe-0">
        <input
          type="text"
          placeholder="Search"
          className="border-0  w-100"
          onChange={(e) => {
            setsearchdata(e.target.value.toLowerCase());
          }}
        />
      </div>
      <div className="col-md-4 p-0">
        <button className="btn btn-success w-100" onClick={handleSearch}>
          Search
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
          </tr>
        </thead>
        <tbody>
          {filterdata &&
            filterdata
              //   .filter((value, index) => value.title)
              .map((value, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{value.name}</td>
                    <td>{value.username}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}

export default Searchfiter;
