import { BrowserRouter, Route, Routes } from "react-router-dom";

// import ClientePage from "../features/cliente/page/ClientePage";
// import EmpresaPage from "../features/empresa/page/EmpresaPage";
import ProdutoPage from "../features/produto/page/ProdutoPage";
export default function Router() {

   return (

       <BrowserRouter>

           <Routes>
               {/* <Route path="/cliente" element={<ClientePage />} /> */}
               {/* <Route path="/empresa" element={<EmpresaPage />} /> */}
               <Route path="/produto" element={<ProdutoPage />} />
           </Routes>

       </BrowserRouter>

   );
}
