import logo from './logo.svg';
import './App.css';


function App() {
  // const user = {
  //   firstName: "React",
  //   lastName: "JSX Activity"
  // };

  const naming = ["React" , "React-Dom", "HTML", "CSS", "JS", "TypeScript", "VanilaJS"]
  const rand = (length) => {
    return parseInt(Math.random() * length)
  }

  // function formatName(user) {
  //   return user.firstName + " " + user.lastName;
  // }

  // JSX 없이 활용한 React
  // return React.createElement("h1", null, `Hello, ${formatName(user)}!`);

    // JSX 를 활용한 React
  return <h1>Hello, {naming[rand(naming.length)]}!</h1>;
}

export default App;
