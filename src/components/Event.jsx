import React, { useContext } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import { DELETE_EVENT, ADD_OPERATION_LOG } from "../actions";
import { timeCurrentIso8601 } from "../utils";
import { AppContext } from "../contexts/AppContext";

export const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `${id}のイベントを本当に削除してもいいですか？`
    );
    if (result) {
      dispatch({ type: DELETE_EVENT, id });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント${id}を削除しました`,
        operatedAt: timeCurrentIso8601
      });
    }
  };
  return (
    <TableRow>
      <TableCell align="right">{id}</TableCell>
      <TableCell align="right">{event.title}</TableCell>
      <TableCell align="right">{event.body}</TableCell>
      <TableCell align="right">
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickDeleteButton}
        >
          削除
        </Button>
      </TableCell>
    </TableRow>
  );
};
