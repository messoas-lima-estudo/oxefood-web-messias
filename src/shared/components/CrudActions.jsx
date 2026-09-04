export default function CrudActions({ onDetail, onEdit, onDelete }) {

    return (

        <div className="flex items-center gap-2" style={{justifyContent: 'center'}}>

            <button className="btn btn-accent" onClick={onDetail}>

                {/* Detalhar */}

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 7.51 7.36 4.5 12 4.5s8.577 3.01 9.964 7.178a1.012 1.012 0 010 .644C20.577 16.49 16.64 19.5 12 19.5s-8.577-3.01-9.964-7.178z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>

            </button>

            {/* Alterar */}

            <button className="btn btn-warning" onClick={onEdit}>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-4"
                >

                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l10.932-10.931z"
                    />

                </svg>

            </button>

            {/* Remover */}

            <button className="btn btn-error" onClick={onDelete}>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-4"
                >

                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 7.5h12m-1.5 0l-.563 9.19a2.25 2.25 0 01-2.245 2.11H10.31a2.25 2.25 0 01-2.245-2.11L7.5 7.5m3 0V5.25A2.25 2.25 0 0112.75 3h-1.5A2.25 2.25 0 009 5.25V7.5"
                    />

                </svg>

            </button>

        </div>

    );

}