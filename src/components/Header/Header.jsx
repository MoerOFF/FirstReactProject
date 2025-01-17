import ReactImage from '../../assets/react-core-concepts.png'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
} 

function Header() {
    const description = reactDescriptions[genRandomInt(2)]
    return (
      <header>
        <img src={ReactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React Concepts You will need for almost any pages you are going to build
        </p>
      </header>
    );
  }

  export default Header;