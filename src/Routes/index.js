import { Routes, Route } from "react-router-dom";
import Login from "./../Pages/Login/index";
import License from "./../Pages/License/index";
import Graph from "./../Pages/Graph/Graph";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
     {/*<Route path="graph" element={<Graph/>} /> */}
      <Route path="graphs" element={<License />} />      
      <Route path="/*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};

export default Router;
