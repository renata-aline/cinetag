import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Cabecalho />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/favoritos" element={<Favoritos />}></Route>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
