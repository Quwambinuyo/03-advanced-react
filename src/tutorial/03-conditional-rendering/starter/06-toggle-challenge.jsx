import { useState } from "react";

const ToggleChallenge = () => {
  // State to manage the visibility of the alert component
  const [showAlert, setShowAlert] = useState(false);

  // Function to toggle the showAlert state
  const toggleAlert = () => {
    // If showAlert is true, set it to false; otherwise, set it to true
    if (showAlert) {
      setShowAlert(false);
      return;
    }

    setShowAlert(true);
  };

  // Alert component to be rendered conditionally
  const Alert = () => {
    return <div className="alert alert-danger">hello world</div>;
  };

  return (
    <>
      <h2>toggle challenge</h2>

      <div>
        {/* Button to trigger the toggleAlert function */}
        <button type="button" className="btn" onClick={toggleAlert}>
          toggle
        </button>
        {/* Conditionally render the Alert component based on the showAlert state */}
        {showAlert && <Alert />}
      </div>
    </>
  );
};

export default ToggleChallenge;
