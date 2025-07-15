"use client";

import { useEffect, useState } from "react";
import { fetchHelloWorld } from "./utils/fetchHelloWorld";

const Home = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHelloWorld();
      setData(data);
    };
    fetchData();
  }, []);

  return <div>This is from backend: {`${data}`}</div>;
  // return <div>Hello world!</div>;
};

export default Home;
