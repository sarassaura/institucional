import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./pages/Layout/layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
