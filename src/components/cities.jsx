import axios from "axios";
import { useEffect, useState } from "react";

const getCities = () => {
  const [cities, setCities] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.2.109:8008/api/locations");
        setCities(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return cities;
};

export default getCities;
