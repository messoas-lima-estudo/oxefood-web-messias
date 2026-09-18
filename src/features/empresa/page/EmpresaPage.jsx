import { useEffect, useState } from "react";
import Breadcrumbs from "../../../shared/components/Breadcrumbs";
import CrudActions from "../../../shared/components/CrudActions";
import Footer from "../../../shared/components/Footer";
import Menu from "../../../shared/components/Menu";
import NewButton from "../../../shared/components/NewButton";
import { listar } from "../../../shared/services/crudService";
import { MAPPING_CONTROLLER_EMPRESA } from "../../empresa/service/empresaService";

export default function EmpresaPage() {

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
           <Menu />
           <Breadcrumbs items={[
               { label: "Empresa" },
               { label: "Listar" }
           ]} />

           <div style={{ marginTop: '40px', marginLeft: '10%', marginRight: '10%' }}>
<div className="overflow-x-auto shadow-sm">
                   <div className="flex items-center justify-between mb-6" style={{marginTop: '20px', marginLeft: '10px', marginRight: '10px'}}>
                       <h1 className="text-3xl font-bold text-gray-800">
                           Produtos
                       </h1>
                       <NewButton destino="/cliente-form" />
                   </div>
                   <div className="divider divider-info" />
                   <div className="overflow-x-auto" style={{marginTop: '30px'}}>
                       <table className="table table-zebra">
                           <thead>
                               <tr style={{textAlign: 'center'}}>
                                   <th>cnpj</th>
                                   <th>Nome</th>
                                   <th>Fone</th>
                                   <th>Ações</th>
                               </tr>
                           </thead>
                           <tbody>
                               {lista.map(empresa => (
                                   <tr key={empresa.id}>
                                       <td style={{width: '40%'}}>{empresa.cnpj}</td>
                                       <td style={{textAlign: 'center'}}>{empresa.nomeEmpresarial}</td>
                                       <td style={{textAlign: 'center'}}>{empresa.fone}</td>
                                       <td style={{textAlign: 'center'}}>
                                           <CrudActions
                                               onEdit={() => editar(empresa.id)}
                                               onDelete={() => confirmarRemover(empresa.id)}
                                           />
                                       </td>
                                   </tr>
                               ))}
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>
           <Footer />
       </div>
   );
}
