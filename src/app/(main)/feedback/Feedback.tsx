import React from "react";

const Feedback: React.FC = () => {
  return (
    <div className="rounded-2xl bg-card p-5 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">We Value Your Feedback</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfJ9QeqMd3rlG-6Bmqi_x1i7XQn8qGygvc4aPl7B5lLDVxhsQ/viewform?embedded=true"
        width="100%"
        height="1012"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="rounded-2xl"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Feedback;
