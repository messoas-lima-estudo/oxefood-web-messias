import Footer from "../../../shared/components/Footer";
import Menu from "../../../shared/components/Menu";

export default function Home() {

   return (

       <div>

           <Menu />

           <div className="hero h-[500px]" style={{marginTop: '60px'}}>
               <div className="hero-content flex-col lg:flex-row">
                   <img
                       alt=""
                       src="logo-IFPE.png"
                       width={500}
                   />
                   <div className="divider lg:divider-horizontal" />
                   <div>
                       <h1 className="text-5xl font-bold"> Bem vindo! </h1>
                       <p className="py-6">
                           Este sistema foi desenvolvido na disciplina de Desenvolvimento para WEB. <br/> <br/>
                           Para acessar o código da API do sistema, acesse: <a href='#' target='_blank' style={{color: 'blue', textDecoration: 'bold'}}> Github </a>  <br/>
                           Para acessar o código do Módulo WEB, acesse: <a href='#' target='_blank'style={{color: 'blue'}}> Github </a>
                       </p>
                   </div>
               </div>
           </div>
           <Footer />
       </div>
   );
}
