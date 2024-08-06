//guideline.tsx
import React from "react";

const Guideline: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card p-5 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">How to Use D-Pool for Car Sharing</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong>Sign Up:</strong> Create an account using your Dickinson College email to get started. This ensures that all users are part of the Dickinson community.
        </li>
        <li>
          <strong>Post a Ride:</strong> If you have a car and are offering a ride, post the details of your trip including date, time, and available seats. Be clear about the pick-up and drop-off locations.
        </li>
        <li>
          <strong>Find a Ride:</strong> Browse available rides posted by others. Use filters to find rides that match your schedule and preferences.
        </li>
        <li>
          <strong>Communicate:</strong> Use the platform’s messaging system to communicate with the driver or passenger to confirm details and make arrangements.
        </li>
        <li>
          <strong>Safety First:</strong> Always meet in public, well-lit areas, preferably on campus. Verify the identity of your driver or passengers before the trip.
        </li>
        <li>
          <strong>Rate and Review:</strong> After your trip, leave a rating and review for your driver or passenger. This helps maintain the quality and reliability of the community.
        </li>
        <li>
          <strong>Follow the Rules:</strong> Abide by all carpooling guidelines and college policies. Respect the driver’s car and other passengers.
        </li>
      </ol>
    </div>
  );
};

export default Guideline;
