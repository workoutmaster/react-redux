import React from "react";
export const Event = ({ dispatch, event }) => {
  const id = event.id;
  const handleClickDeleteButton = () => {
    dispatch({ type: "DELETE_EVENT", id });
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
