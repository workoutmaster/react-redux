import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
export const OperationLog = ({ operationLog }) => {
  return (
    <TableRow>
      <TableCell align="right">{operationLog.description}</TableCell>
      <TableCell align="right">{operationLog.operatedAt}</TableCell>
    </TableRow>
  );
};
