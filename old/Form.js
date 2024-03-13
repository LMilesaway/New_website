
import React, { useState, useEffect } from 'react';
import './LandingPage.css'; // Import your CSS file here

const Form = () => {
  const [showForm, setShowForm] = useState(true); // Set it to true by default

  useEffect(() => {
    // Your existing useEffect logic here...
  }, []); // Make sure to remove 'formVisible' from the dependencies
  return (
    <div className="FormContainer">
      <iframe
        title="Google Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfe6vZgDGzoVwjSjjvD7waU_IKvc8Eod5_KM_ZEYKlYaGP3KA/viewform?embedded=true"
        className="Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Form;



