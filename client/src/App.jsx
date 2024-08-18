import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routes } from "./routes";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <Router>
      <div className="bg-main-color h-screen flex">
        <div className="m-10 flex-1 flex gap-5">
          <Sidebar />
          <div className="flex-1 flex flex-col gap-y-5 bg-second-color rounded-xl overflow-hidden">
            <Navbar />
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
