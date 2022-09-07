import axios from "axios";

const getAllPersons = async () => {
  const URL = `${process.env.REACT_APP_BASE_URL}/v1/persons?api_token=${process.env.REACT_APP_API_TOKEN}`;
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllPersons };
