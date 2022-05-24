import RegistrationForm from "./components/RegistrationForm";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="container">
      <div>
        <h2>Controlled form</h2>
        <RegistrationForm />
      </div>
      <div>
        <h2>Uncontrolled form</h2>
        <UserForm />
      </div>
    </div>
  );
}

export default App;
