import Greeting from "./components/Greeting.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import JSXExamples from "./examples/JSXExamples.jsx";

function App() {
  const learnerName = "React Learner";

  return (
    <main>
      <h1>My React.js Learning – Day 01</h1>
      <p>Practising JSX, Components and Props.</p>

      <Greeting name={learnerName} />

      <h2>Reusable Components</h2>
      <ProfileCard name="Aarav" role="Frontend Learner" />
      <ProfileCard name="Maya" role="UI Developer" />

      <JSXExamples />
    </main>
  );
}

export default App;
