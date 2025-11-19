import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import ProtectedRoute from "./components/ProtectedRoute";
import Favoritos from "./pages/Favourites";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fav" element={<Favoritos />}></Route>
          <Route path="/create" element={ <ProtectedRoute><Create /></ProtectedRoute>}></Route>
          <Route path="/edit/:id" element={ <ProtectedRoute><Edit /></ProtectedRoute>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
