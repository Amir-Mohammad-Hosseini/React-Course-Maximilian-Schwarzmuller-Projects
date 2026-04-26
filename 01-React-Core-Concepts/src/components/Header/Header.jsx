const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import reactLogo from "../../assets/react-core-concepts.png"
import "./Header.css"

function genRandomInt(descriptionsLength) {
  return Math.floor(Math.random() * (descriptionsLength));
}

export default function Header() {
  const reactDescription = reactDescriptions[genRandomInt(reactDescriptions.length)]
  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}