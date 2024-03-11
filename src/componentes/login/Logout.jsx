import { deslogarUsuario } from "../../infra/usuarios";

export default function Logout({usuario, setUsuario}) {

    function handleClick() {
        deslogarUsuario(usuario, setUsuario);
    }

    return (
        <div className="logout">
            <form>
                Login: <b>{usuario.email} </b>
                <input type="button" value="Logout" onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
            </form>
        </div>
    )
}
