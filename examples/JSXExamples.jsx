function JSXExamples() {
  const course = "React.js";

  const topics = [
    "JSX",
    "Components",
    "Props"
  ];

  return (
    <section>
      <h2>JSX Practice</h2>

      <p>Currently learning: {course}</p>

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
