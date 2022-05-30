import React, { useState } from "react";

export default function Portfolio() {
  const [condition, setCondition] = useState(false);
  console.log("condition", condition);
  return (
    <div>
      <div>{condition}</div>
      <div
        onClick={() => setCondition((prev) => !prev)}
        style={{ top: "200px", zIndex: "52", cursor: "pointer", position: 'relative' }}
      >
        push
      </div>
    </div>
  );
}
