import { useEffect, useState } from "react";
import Breadcrumbs from "../../../shared/components/Breadcrumbs";
import CrudActions from "../../../shared/components/CrudActions";
import Footer from "../../../shared/components/Footer";
import Menu from "../../../shared/components/Menu";
import NewButton from "../../../shared/components/NewButton";
import { listar } from "../../../shared/services/crudService";
import { MAPPING_CONTROLLER_PRODUTO } from "../../produto/service/produtoService";

export default function ProdutoPage() {
   const [lista, setLista] = useState([]);

   useEffect(() => {
       carregar();
   }, []);

   async function carregar() {
       const data = await listar(MAPPING_CONTROLLER_PRODUTO);
       setLista(data);
   }

   function editar(id) {}

   async function confirmarRemover(id) {
       if (confirm("Deseja realmente excluir este produto?")) {
           console.log(id);
       }
   }

   return (
       <div>
           <Menu />
           <Breadcrumbs items={[
               { label: "Produto" },
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
                                   <th>codigo</th>
                                   <th>titulo</th>
                                   <th>valorUnitario</th>
                                   <th>Ações</th>
                               </tr>
                           </thead>
                           <tbody>
                               {lista.map(produto => (
                                   <tr key={produto.id}>
                                       <td style={{width: '40%'}}>{produto.codigo}</td>
                                       <td style={{textAlign: 'center'}}>{produto.titulo}</td>
                                       <td style={{textAlign: 'center'}}>{produto.valorUnitario}</td>
                                       <td style={{textAlign: 'center'}}>
                                           <CrudActions
                                               onEdit={() => editar(produto.id)}
                                               onDelete={() => confirmarRemover(produto.id)}
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