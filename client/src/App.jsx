// import { useState } from "react";

import Nav1 from "./Components/Nav1";
import { Outlet } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="h-screen">
      <Nav1 />
      <Outlet />
    </div>
  );
}

export default App;
