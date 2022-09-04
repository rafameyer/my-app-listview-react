import { Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import ListView from "../components/ListView/ListView";

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    const URL =
      "https://rafael.pipedrive.com/v1/persons?api_token=25afa083981b154ef7bf03bba5fa1e1c85425762";
    const { data } = await axios.get(URL);
    setData(data?.data);
    setFilteredData(data?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const onSearch = (value: string) => {
    let result = [];
    result = data.filter((item: any) => {
      return item.name?.search(value) !== -1;
    });
    setFilteredData(result);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          flexDirection: "row",
          height: "50px",
        }}
      >
        <h2 style={{ float: "left" }}>People's List</h2>
        <div style={{ float: "right" }}>
          <Input.Search
            size="large"
            placeholder="Filter By Name"
            onChange={(event) => onSearch(event.target.value)}
            onSearch={onSearch}
            style={{ width: 200, marginTop: 10 }}
          />
        </div>
      </div>
      <hr />
      <ListView items={filteredData} />
    </div>
  );
};
export default Home;
