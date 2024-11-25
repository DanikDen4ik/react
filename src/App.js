import React from "react";
import Message from "./components/Message";
import CommentsList from "./components/CommentsList";

function App() {
  return (
    <div className="App">
      <h1>React Message Component</h1>
      <Message text="Hello, this is your message!" />
      <div>
        <CommentsList />
      </div>
    </div>
  );
}

export default App;
