import React, { useState } from "react";
import { Modal } from "../lib";

const Standard = () => {
  const [shouldModalOpen, setShouldModalOpen] = useState(false);

  return (
    <div className="Standard">
      <h1>Successful button</h1>
      <div className="btns-container">
        <button
          className="Standard__successful-button"
          onClick={() => setShouldModalOpen(true)}
        >
          Click me to be successful
        </button>
      </div>
      <Modal
        textContent="Wow! You are successful."
        open={shouldModalOpen}
        setShouldModalOpen={setShouldModalOpen}
      />
    </div>
  );
};

export default Standard;
