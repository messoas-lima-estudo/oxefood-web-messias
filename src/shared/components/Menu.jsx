export default function Menu() {

    return (

        <div style={{ marginTop: '20px', marginLeft: '10%', marginRight: '10%' }}>

            <button className="btn sm:hidden" popoverTarget="main-menu" > Menu </button>

            <div className="megamenu max-sm:megamenu-vertical p-2 border border-emerald-100 bg-emerald-50 rounded-box shadow-lg" id="main-menu" popover="auto">

                <span className="megamenu-active"></span>

                <button className="btn btn-ghost">
                    <a href="/home">
                        Home
                    </a>
                </button>

                <button popoverTarget="menu-clientes"> <strong> Cliente </strong> </button>
                <div id="menu-clientes" popover="auto">
                    <ul className="menu">
                        <li><a href="/cliente">Listar</a></li>
                        <li><a href="/cliente-form">Cadastrar</a></li>
                    </ul>
                </div>

                <button popoverTarget="menu-produtos"> <strong> Produto </strong> </button>
                <div id="menu-produtos" popover="auto">
                    <ul className="menu">
                        <li><a href="#">Listar</a></li>
                        <li><a href="#">Cadastrar</a></li>
                    </ul>
                </div>

            </div>

        </div>
    );
}