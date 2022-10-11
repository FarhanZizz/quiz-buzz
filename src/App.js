import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import QuizMenu from './Components/QuizMenu/QuizMenu';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <QuizMenu></QuizMenu>
    </div>
  );
}

export default App;
