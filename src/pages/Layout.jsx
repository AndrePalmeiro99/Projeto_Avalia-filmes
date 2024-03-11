import { Outlet, Link } from "react-router-dom";
import BarraLogin from "../componentes/login/BarraLogin";
import { useState } from "react";

export default function Layout() {

    const [usuario, setUsuario] = useState({ id: "", email: "", senha: "" });

    return (
        <div style={{ position: 'absolute', left: '10px', top: '10px' }}>
            <BarraLogin usuario={usuario} setUsuario={setUsuario} />
            {usuario.id &&
                <div>
                    <nav>
                        <div className="max-w-screen-xl px-4 py-3 mx-auto">
                            <div className="flex items-center">
                                <ul>
                                    <li>
                                        <Link to={"/"} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Início</Link>
                                    </li>
                                    <li>
                                        <Link to={"/avaliacoes"} className="text-gray-900 dark:text-white hover:underline">Avaliações de filmes</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Outlet context={[usuario, setUsuario]} />
                </div>
            }
        </div>
    )
};
