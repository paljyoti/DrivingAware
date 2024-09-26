import React from "react";
import "../css/cost.css";

function Cost() {
  return (
    <div>
    <div className="ct" style={{background:"white"}}>
      <h1>COST</h1>
      <div className="container">
        <h1>For gov. website book a test</h1>
        <h2>Step 1: Receive the Offer</h2>
        <p>
          After being caught speeding, you’ll get a Notice of Intended
          Prosecution (NIP) from the police, which may include the option to
          attend a Speed Awareness Course if you meet the eligibility criteria.
        </p>
        <h2>Step 2: Accept the Offer</h2>
        <p>
          You typically have 28 days to accept the offer. Follow the
          instructions in the NIP.
        </p>
        <h2>Step 3: Visit the NDORS Website</h2>
        <p>
          Go to the NDORS website, where you can find a section for registering
          for a Speed Awareness Course.
        </p>
        <h2>Step 4: Create an Account</h2>
        <p>
          Register an account by providing your personal details and the NIP
          reference number.
        </p>
        <h2>Step 5: Choose Course Date and Location</h2>
        <p>
          Select a suitable course date and location (in-person or online)
          within 12 weeks of the offense.
        </p>
        <h2>Step 6: Payment</h2>
        <p>
          Pay the course fee (usually £80 to £100) using a debit or credit card.
        </p>
        <h2>Step 7: Confirmation</h2>
        <p>
          After payment, you’ll receive a confirmation email with course details
          and any requirements.
        </p>
        <h2>Step 8: Attend the Course</h2>
        <p>Attend the course on your chosen date.</p>
        <h2>Step 9: Completion</h2>
        <p>
          Upon completing the course, the provider will notify the DVLA and
          police, ensuring no penalty points are added to your license. This
          streamlined process makes it easy for you to fulfil your obligations
          while enhancing your driving skills!
        </p>
      </div>

      <div className="head">
        <h5>
          The cost of a speed awareness course typically ranges from £80 to
          £110, depending on your location. While this fee is comparable to a
          standard speeding fine, opting for the course allows drivers to avoid
          penalty points on their license.As a third-party agency, if you prefer
          not to handle these tasks yourself, you can choose our platform. We’ll
          take care of booking your test for you, and we will charge for our services .

        </h5>
      </div>
    </div>
    </div>
  );
}

export default Cost;
