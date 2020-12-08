import React, { useState, useReducer } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import reducer from "../reducers";
import { Event } from "./Event";
export const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_EVENT",
      title,
      body
    });
    setTitle("");
    setBody("");
  };
  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });
  const classes = useStyles();

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form className="newEvent" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="タイトル"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      <form className="newEvent" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="内容"
          variant="outlined"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
      <Button onClick={addEvent} variant="contained" color="primary">
        イベント作成
      </Button>
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
            {state.map((event, index) => (
              <Event key={index} event={event} dispatch={dispatch} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
