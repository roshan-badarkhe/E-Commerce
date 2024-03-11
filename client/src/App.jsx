// import { useState } from "react";

import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";

// import Xyz from "./Components/Xyz";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="h-fit bg-gray-300">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
