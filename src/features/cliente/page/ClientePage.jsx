import { useEffect, useState } from "react";

import { listar } from "../../../shared/services/crudService";
import { MAPPING_CONTROLLER_CLIENTE } from "../../cliente/service/clienteService";

export default function ClientePage() {

   const [lista, setLista] = useState([]);

   useEffect(() => {
       carregar();
   }, []);

   async function carregar() {
       const data = await listar(MAPPING_CONTROLLER_CLIENTE);
       setLista(data);
   }

   return (
       <div>
           <h1>Clientes</h1>
           {lista.map(cliente => (
               <div key={cliente.id}>
                   {cliente.nome} - {cliente.cpf}
               </div>
           ))}
       </div>
   );
}
