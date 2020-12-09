import React, { useReducer } from "react";
import reducer from "../reducers";
import { EventForm } from "./EventForm";
import { Events } from "./Events";
import { OperationLogs } from "./OperationLogs";
import { AppContext } from "../contexts/AppContext";
export const App = () => {
  const initilState = {
    events: [],
    operationLogs: []
  };
  const [state, dispatch] = useReducer(reducer, initilState);
  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <EventForm />
        <Events />
        <OperationLogs />
      </AppContext.Provider>
    </>
  );
};
