import React from "react";
function JSXExamples() {
  const course = "React.js";

  const topics = [
    "JSX",
    "Functional Components",
    "Props"
  ];

  return (
    <section>
      <h2>JSX Practice</h2>

      <p>Currently learning: {course}</p>

      <h3>Topics covered:</h3>

      <ul>
        {topics.map((topic) => (
          <li key={topic}>
            {topic}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default JSXExamples;
