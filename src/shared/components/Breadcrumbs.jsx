import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {

    return (

        <div className="breadcrumbs text-sm mb-6" style={{ marginTop: '20px', marginLeft: '11%' }}>

            <ul>

                {items.map((item, index) => (

                    <li key={index}>

                        {item.to ? (

                            <Link to={item.to} className="text-blue-600 hover:text-blue-800">
                                {item.label}
                            </Link>

                        ) : (

                            <span className="text-gray-500 font-medium">
                                {item.label}
                            </span>

                        )}

                    </li>
                ))}

            </ul>
        </div>
    );
}