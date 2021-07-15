import { useState } from "react";

const Expand = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded((currExpand) => !currExpand);

  return (
    <div>
      <button onClick={toggleExpand}>
        {expanded ? "Close comments" : "Open comments"}
      </button>
      {expanded && children}
    </div>
  );
};

export default Expand;
