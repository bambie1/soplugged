import React from "react";
import { Pagination } from "@material/mui-lab";

const PaginationBar = ({ totalCount, pageLimit, handleClick }) => {
  let pageCount = Math.ceil(totalCount / pageLimit);
  return (
    <Pagination count={pageCount} onChange={(e, page) => handleClick(page)} />
  );
};

export default PaginationBar;
