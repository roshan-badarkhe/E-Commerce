// import { useState } from "react";

import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="h-screen">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
