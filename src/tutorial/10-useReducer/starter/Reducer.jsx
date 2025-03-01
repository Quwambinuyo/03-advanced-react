import { CLEAR_LIST, RESET_LIST, REMOVE_PERSON } from "./ACtion";
import { data } from "../../../data";

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

export default reducer;
