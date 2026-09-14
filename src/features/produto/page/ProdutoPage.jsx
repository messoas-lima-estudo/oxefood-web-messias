import { useEffect, useState } from "react";

import { listar } from "../../../shared/services/crudService";
import { MAPPING_CONTROLLER_PRODUTO } from "../../produto/service/produtoService";

export default function ClientePage() {

   const [lista, setLista] = useState([]);

   useEffect(() => {
       carregar();
   }, []);

   async function carregar() {
       const data = await listar(MAPPING_CONTROLLER_PRODUTO);
       setLista(data);
   }

   return (
       <div>
           <h1>Produtos</h1>
           {lista.map(produto => (
               <div key={produto.id}>
                   {produto.titulo} - {produto.codigo}
               </div>
           ))}
       </div>
   );
}
