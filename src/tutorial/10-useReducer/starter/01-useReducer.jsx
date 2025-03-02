import React from "react";
import { useState, useReducer } from "react";
import { data } from "../../../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_PERSON } from "./ACtion";
import reducer from "./Reducer";

// Initial state for the reducer
const defaultState = {
  people: data, // Initial list of people
  isLoading: false, // Example state property (not used in this code)
};

const ReducerBasics = () => {
  // useReducer hook to manage state with the reducer function
  const [state, dispatch] = useReducer(reducer, defaultState);

  // Function to remove a person from the list
  const removeItem = (id) => {
    dispatch({ type: REMOVE_PERSON, payload: { id } });
  };

  // Function to clear the list
  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  // Function to reset the list to default state
  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <div>
      {/* Render the list of people */}
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}

      {/* Conditionally render either the "Reset list" or "Clear items" button */}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          Reset list
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
