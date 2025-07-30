import { useState } from "react";
import ChatBotWrapper from "./components/ChatBotWrapper";
import ActionTypeForm from "./components/ActionTypeForm";

function App() {
  const [formOption, setFormOption] = useState(true);
  return (
    <main onClick={() => setFormOption(false)}>
      <ChatBotWrapper />
      {formOption && <ActionTypeForm />}
    </main>
  );
}

export default App;
