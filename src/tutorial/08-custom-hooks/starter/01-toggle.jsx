import useToggle from "./useToggle";

/**
 * Example component demonstrating the use of the `useToggle` custom hook.
 *
 * This component uses `useToggle` to manage a boolean state (`show`),
 * which controls the visibility of some content.
 * A button that toggles the visibility of a heading.
 */
const ToggleExample = () => {
  const { show, toggle } = useToggle(true);

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};

export default ToggleExample;
