import { BrowserRouter, Route, Routes } from "react-router-dom";

import ClienteForm from "../features/cliente/page/ClienteForm";
import EmpresaForm from "../features/empresa/page/EmpresaForm";

 import ClientePage from "../features/cliente/page/ClientePage";
import EmpresaPage from "../features/empresa/page/EmpresaPage";
import Home from "../features/home/page/Home";
import Produtoform from "../features/produto/page/ProdutoForm";
import ProdutoPage from "../features/produto/page/ProdutoPage";
export default function Router() {

   return (

       <BrowserRouter>

           <Routes>
               <Route path="/cliente" element={<ClientePage />} />
                <Route path="/cliente-form" element={<ClienteForm />} />
                
               <Route path ="/home" element={<Home />} />
                <Route path="/empresa" element={<EmpresaPage />} /> 
                <Route path="/empresa-form" element={<EmpresaForm />} />
                <Route path="/produto" element={<ProdutoPage />} /> 
                <Route path="/produto-form" element={<Produtoform />} />
           </Routes>

       </BrowserRouter>

   );
}
