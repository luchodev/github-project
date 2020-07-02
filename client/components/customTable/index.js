import React, { useEffect, useReducer } from "react";
import { Table, TablePagination } from "@material-ui/core";

import {
   customTableHeadCells as headCells,
   stableSort,
   getComparator,
} from "../../utils";
import { customTableReducer } from "../../utils/reducers";
import { actions } from "../../utils/consts";
import CustomHeader from "./customHeader";
import CustomBody from "./customBody";

const CustomTable = ({ data }) => {
   const initialState = {
      order: "asc",
      orderBy: "name",
      rowsPerPage: 5,
      page: 0,
      items: [],
      sourceData: [],
      filter: "",
   };
   const [state, dispatch] = useReducer(customTableReducer, initialState);

   useEffect(() => {
      dispatch({ type: actions.NEW_DATASOURCE, payload: data });
   }, [data]);

   const handleRequestSort = (_, property) => {
      const isAsc = state.orderBy === property && state.order === "asc";
      dispatch({
         type: actions.CHANGE_SORT,
         payload: { order: isAsc ? "desc" : "asc", orderBy: property },
      });
   };

   const handleChangePage = (_, newPage) => {
      dispatch({ type: actions.CHANGE_PAGE, payload: { page: newPage } });
   };

   const handleChangeRowsPerPage = (event) => {
      dispatch({
         type: actions.CHANGE_ROWS_PER_PAGE,
         payload: {
            rowsPerPage: parseInt(event.target.value, 10),
            page: 0,
         },
      });
   };

   const handleFilterChange = (event) => {
      let value = event.target.value;
      dispatch({
         type: actions.CHANGE_FILTER,
         payload: {
            filter: value,
         },
      });
      if (value.length > 2) {
         let filteredData = state.sourceData.filter((x) =>
            x.name.toLowerCase().includes(value.toLowerCase())
         );
         dispatch({
            type: actions.UPDATE_ITEMS,
            payload: {
               page: 0,
               items: filteredData,
            },
         });
      } else {
         dispatch({
            type: "CHANGE_ITEMS",
            payload: {
               items: state.sourceData,
            },
         });
      }
   };

   return (
      <>
         <input
            type="text"
            className="table-filter"
            placeholder="Filtrar por nombre de repositorio"
            value={state.filter}
            onChange={handleFilterChange}
         />
         <div className="table-container">
            <Table className="custom-table">
               <CustomHeader
                  cells={headCells}
                  order={state.order}
                  orderBy={state.orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={state.items.length}
               />
               <CustomBody
                  data={state.items}
                  stableSort={stableSort}
                  comparator={getComparator}
                  order={state.order}
                  orderBy={state.orderBy}
                  page={state.page}
                  rowsPerPage={state.rowsPerPage}
               />
            </Table>
         </div>
         <TablePagination
            component="div"
            count={state.items.length}
            rowsPerPageOptions={[5]}
            rowsPerPage={state.rowsPerPage}
            page={state.page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
         />
      </>
   );
};

export default CustomTable;
