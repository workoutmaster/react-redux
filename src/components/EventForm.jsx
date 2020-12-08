import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
export const EventForm = ({ state, dispatch }) => {
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
  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm(
      "全てのイベントを本当に削除してもいいですか？"
    );
    if (result)
      dispatch({
        type: "DELETE_ALL_EVENTS"
      });
  };
  const validateButton = title === "" || body === "";
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
      <Button
        onClick={addEvent}
        variant="contained"
        color="primary"
        disabled={validateButton}
      >
        イベント作成
      </Button>
      <Button
        onClick={deleteAllEvents}
        variant="contained"
        color="secondary"
        disabled={state.length === 0}
      >
        イベント全削除
      </Button>
    </>
  );
};
