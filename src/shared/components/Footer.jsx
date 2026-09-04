
export default function Footer() {

    return (

        <div style={{ marginTop: '10%', marginLeft: '10%', marginRight: '10%' }}>

            <footer className="footer sm:footer-horizontal footer-center bg-emerald-50 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - IFPE Campus Jaboatão. Todos os direitos reservados.</p>
                </aside>
            </footer>

        </div>

    );

}