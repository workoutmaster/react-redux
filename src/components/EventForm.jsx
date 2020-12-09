import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from "../actions";
import { AppContext } from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";
export const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    });
    dispatch({
      type: ADD_OPERATION_LOG,
      description: "イベントを作成しました",
      operatedAt: timeCurrentIso8601
    });
    setTitle("");
    setBody("");
  };
  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm(
      "全てのイベントを本当に削除してもいいですか？"
    );
    if (result) {
      dispatch({
        type: DELETE_ALL_EVENTS
      });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: "全てのイベントを削除しました.。",
        operatedAt: timeCurrentIso8601
      });
    }
  };
  const deleteAllOpereationLogs = (e) => {
    e.preventDefault();
    const result = window.confirm("全てのログを本当に削除してもいいですか？");
    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS
      });
    }
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
        disabled={state.events.length === 0}
      >
        イベント全削除
      </Button>
      <Button
        onClick={deleteAllOpereationLogs}
        variant="contained"
        color="secondary"
        disabled={state.operationLogs.length === 0}
      >
        ログ全削除
      </Button>
    </>
  );
};
