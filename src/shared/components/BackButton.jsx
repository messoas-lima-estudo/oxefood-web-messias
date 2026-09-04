import { Link } from "react-router-dom";

export default function BackButton({ destino }) {

    return (

        <Link
            to={destino}
            className="btn"
        >

            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="2" 
                stroke="currentColor" 
                className="size-5"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" 
                />
                
            </svg>

            Voltar

        </Link>

    );

}