import React from "react";

const IssueOptions = ({ issueButtons = [] }) => {
  if (issueButtons.length === 0) {
    return <p>No issues found. Please try another service.</p>;
  }

  return (
    <div className="issue-options">
      {issueButtons.map((option) => (
        <button key={option.id} onClick={option.handler} className="issue-button">
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default IssueOptions;
