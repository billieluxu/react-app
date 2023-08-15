import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <b>World</b>!
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Click</Button>
    </div>
  );
}

export default App;
