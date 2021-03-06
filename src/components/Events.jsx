import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Event } from "./Event";
import { AppContext } from "../contexts/AppContext";
export const Events = () => {
  const { state } = useContext(AppContext);
  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });
  const classes = useStyles();
  return (
    <>
      <h4>イベント一覧</h4>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">タイトル</TableCell>
              <TableCell align="right">内容</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.events.map((event, index) => (
              <Event key={index} event={event} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
