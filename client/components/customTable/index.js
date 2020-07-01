import React, { useState } from "react";
import { Table, TablePagination } from "@material-ui/core";

import CustomHeader from "./customHeader";
import CustomBody from "./customBody";

const CustomTable = ({ data }) => {
   const [order, setOrder] = useState("asc");
   const [orderBy, setOrderBy] = useState("calories");
   const [rowsPerPage, setRowsPerPage] = useState(5);
   const [page, setPage] = useState(0);

   const headCells = [
      {
         id: "name",
         numeric: false,
         disablePadding: true,
         label: "Nombre",
      },
      {
         id: "description",
         numeric: false,
         disablePadding: false,
         label: "Descripción",
      },
      {
         id: "language",
         numeric: false,
         disablePadding: false,
         label: "Lenguaje",
      },
      { id: "url", numeric: false, disablePadding: false, label: "Url" },
      {
         id: "defaultBranch",
         numeric: false,
         disablePadding: false,
         label: "Branch ",
      },
   ];

   const stableSort = (array, comparator) => {
      const stabilizedThis = array.map((el, index) => [el, index]);
      stabilizedThis.sort((a, b) => {
         const order = comparator(a[0], b[0]);
         if (order !== 0) return order;
         return a[1] - b[1];
      });
      return stabilizedThis.map((el) => el[0]);
   };

   const getComparator = (order, orderBy) => {
      return order === "desc"
         ? (a, b) => descendingComparator(a, b, orderBy)
         : (a, b) => -descendingComparator(a, b, orderBy);
   };

   const descendingComparator = (a, b, orderBy) => {
      if (b[orderBy] < a[orderBy]) {
         return -1;
      }
      if (b[orderBy] > a[orderBy]) {
         return 1;
      }
      return 0;
   };

   const handleRequestSort = (_, property) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
   };

   const handleChangePage = (_, newPage) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
   };

   return (
      <>
         {data.length > 0 ? (
            <>
               <div className="table-container">
                  {/* TODO: Arreglar estilos de la tabla con informacion amplia en los campos consultar con xavvvier */}
                  <Table className="custom-table">
                     <CustomHeader
                        cells={headCells}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={data.length}
                     />
                     <CustomBody
                        data={data}
                        stableSort={stableSort}
                        comparator={getComparator}
                        order={order}
                        orderBy={orderBy}
                        page={page}
                        rowsPerPage={rowsPerPage}
                     />
                  </Table>
               </div>
               <TablePagination
                  component="div"
                  count={data.length}
                  rowsPerPageOptions={[5]}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
               />
            </>
         ) : null}
      </>
   );
};

export default CustomTable;
