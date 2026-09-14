import { useEffect, useState } from "react";

import { listar } from "../../../shared/services/crudService";
import { MAPPING_CONTROLLER_EMPRESA } from "../../empresa/service/empresaService";

export default function ClientePage() {

   const [lista, setLista] = useState([]);

   useEffect(() => {
       carregar();
   }, []);

   async function carregar() {
       const data = await listar(MAPPING_CONTROLLER_EMPRESA);
       setLista(data);
   }

   return (
       <div>
           <h1>Empresas</h1>
           {lista.map(empresa => (
               <div key={empresa.id}>
                   {empresa.nomeEmpresarial} - {empresa.cnpj}
               </div>
           ))}
       </div>
   );
}
