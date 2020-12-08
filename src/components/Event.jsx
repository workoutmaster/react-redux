import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
export const Event = ({ dispatch, event }) => {
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `${id}のイベントを本当に削除してもいいですか？`
    );
    if (result) dispatch({ type: "DELETE_EVENT", id });
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
