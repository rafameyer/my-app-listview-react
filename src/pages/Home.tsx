import { Input } from "antd";
import { useEffect, useState } from "react";
import ListView from "../components/ListView/ListView";
import IPerson from "../interfaces/IPerson";
import { getAllPersons } from "../services/PersonsServices";
import * as Styles from "./Styles";

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    const resp = await getAllPersons();
    setData(resp?.data);
    setFilteredData(resp?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const onSearch = (value: string) => {
    let result = [];
    result = data.filter((item: IPerson) => {
      return item.name?.search(value) !== -1;
    });
    setFilteredData(result);
  };

  return (
    <Styles.StructPage>
      <Styles.Container>
        <Styles.LeftWrapperElement>
          <h2>People's List</h2>
        </Styles.LeftWrapperElement>
        <Styles.RightWrapperElement>
          <Input.Search
            size="large"
            placeholder="Filter By Name"
            onChange={(event) => onSearch(event.target.value)}
            onSearch={onSearch}
            style={{ width: 200, marginTop: 10 }}
          />
        </Styles.RightWrapperElement>
      </Styles.Container>
      <hr />
      <ListView items={filteredData} />
    </Styles.StructPage>
  );
};
export default Home;
