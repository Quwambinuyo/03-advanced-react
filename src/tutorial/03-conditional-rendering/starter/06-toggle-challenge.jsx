import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    if (showAlert) {
      setShowAlert(false);
      return;
    }

    setShowAlert(true);
  };

  return (
    <>
      <h2>toggle challenge</h2>

      <div>
        <button type="button" className="btn" onClick={toggleAlert}>
          toggle
        </button>
        {showAlert && <Alert />}
      </div>
    </>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};

export default ToggleChallenge;
