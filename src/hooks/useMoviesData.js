import { useState, useEffect } from "react";

const NUM_ITEMS_PER_PAGE = 4;

const useMoviesData = (apiUrl) => {
  const [data, setData] = useState([]);
  const [numToShow, setNumToShow] = useState(NUM_ITEMS_PER_PAGE);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiUrl);
      const json = await response.json();
      setData(json.results || []);
    }
    fetchData();
  }, [apiUrl]);

  const itemsToShow = data.slice(0, numToShow);

  const showMore = () => setNumToShow(numToShow + NUM_ITEMS_PER_PAGE);

  return [itemsToShow, showMore];
};

export default useMoviesData;
