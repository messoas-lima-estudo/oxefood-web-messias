import { Link } from "react-router-dom";

export default function NewButton({ destino }) {

    return (

        <Link
            to={destino}
            className="btn btn-info"
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
                    d="M12 4.5v15m7.5-7.5h-15"
                />

            </svg>

            Novo

        </Link>

    );

}