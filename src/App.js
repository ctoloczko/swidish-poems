import "./App.css";
import UserForm from "./UserForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Skriv en svensk dikt med AI</h2>
        <p>Fyll i några ord och låt AI skapa en vacker dikt åt dig</p>
      </header>

      <UserForm />
    </div>
  );
}

export default App;
