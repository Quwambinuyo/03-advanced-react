import React from "react";
import { useState, useReducer } from "react";
import { data } from "../../../data";

// Action types for the reducer
const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_PERSON = "REMOVE_PERSON"; // Fixed typo: was "RESET_PERSON"

// Initial state for the reducer
const defaultState = {
  people: data, // Initial list of people
  isLoading: false, // Example state property (not used in this code)
};

// Reducer function to handle state updates based on dispatched actions
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }; // Clears the people array
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data }; // Resets the list to original data
  }

  if (action.type === REMOVE_PERSON) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );

    return { ...state, people: newPeople }; // Removes a person from the list
  }

  // Return an error if an unknown action type is dispatched
  return new Error(`No matching "${action.type}" - action type`);
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

  console.log(state); // Debugging: Logs state to the console

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
