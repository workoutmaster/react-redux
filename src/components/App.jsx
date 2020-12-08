import React, { useReducer } from "react";
import reducer from "../reducers";
import { EventForm } from "./EventForm";
import { Events } from "./Events";
export const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <>
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </>
  );
};
