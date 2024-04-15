import { logarUsuario } from "../../infra/usuarios";

export default function Login({ usuario, setUsuario }) {

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setUsuario((objetoAtual) => {
            return { ...objetoAtual, [fieldName]: fieldValue }
        });
    };

    const handleLogin = (event) => {
        logarUsuario(usuario, setUsuario);
    }

    return (
        <div className="container">
            <h3 className="titulo">Login</h3>
            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="usuario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
                    <input type="text" name="email" value={usuario.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="senha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha:</label>
                    <input type="password" name="senha" value={usuario.senha} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex items-start mb-5">
                    <input type="button" value="Login" onClick={handleLogin} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
                </div>
            </form>


        </div>
    )
}