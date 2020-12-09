import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { OperationLog } from "./OperationLog";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
export const OperationLogs = () => {
  const { state } = useContext(AppContext);
  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });
  const classes = useStyles();
  return (
    <>
      <h4>操作ログ一覧</h4>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">内容</TableCell>
              <TableCell align="right">日時</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.operationLogs.map((operationLog, index) => (
              <OperationLog key={index} operationLog={operationLog} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
