import { useState } from "react";

/**
 * Custom hook to manage a boolean toggle state.
 *
 * @param {boolean} defaultValue - The initial state of the toggle (true or false).
 * @returns {object} An object containing:
 *   - `show` (boolean): The current state.
 *   - `toggle` (function): A function to toggle the state between true and false.
 *
 * Usage Example:
 * const { show, toggle } = useToggle(false);
 *
 * <button onClick={toggle}>Toggle</button>
 * {show && <p>Content is visible</p>}
 */
const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);

  const toggle = () => {
    setShow(!show);
  };

  return { show, toggle };
};

export default useToggle;
