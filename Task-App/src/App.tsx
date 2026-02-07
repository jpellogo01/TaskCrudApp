import "./App.css";

import Task from "./components/Task";
function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "beige",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Task />
    </div>
  );
}

export default App;
