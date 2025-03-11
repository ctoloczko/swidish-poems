import "./App.css";
import UserForm from "./UserForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Svenska PoemGenerator</h1>
        <h4>Skriv en svensk dikt med AI</h4>
      </header>

      <UserForm />

      <footer>Made with ❤️ by Celina</footer>
    </div>
  );
}

export default App;
