import React from "react";
import { TableRow, TableCell, TableBody } from "@material-ui/core";

const CustomBody = ({
   data,
   stableSort,
   comparator,
   order,
   orderBy,
   page,
   rowsPerPage,
}) => {
   return (
      <TableBody>
         {stableSort(data, comparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
               return (
                  <TableRow className="custom-table__body-row" key={row.name}>
                     <TableCell align="left">{row.name}</TableCell>
                     <TableCell align="left">{row.description}</TableCell>
                     <TableCell align="left">{row.language}</TableCell>
                     <TableCell align="left">{row.url}</TableCell>
                     <TableCell align="left">{row.defaultBranch}</TableCell>
                  </TableRow>
               );
            })}
      </TableBody>
   );
};

export default CustomBody;
