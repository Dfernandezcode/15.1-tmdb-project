import { useState } from "react";

export const usePagination = (items, numItemsPerPage = 4) => {
  // Pagination
  const [numItemsToShow, setNumItemsToShow] = useState(numItemsPerPage);
  const firstItems = items?.slice(0, numItemsToShow) || [];
  const showMore = () => {
    setNumItemsToShow(numItemsToShow + numItemsPerPage);
  };
  const theAreMore = items?.length > numItemsToShow;

  return [firstItems, showMore, theAreMore];
};
