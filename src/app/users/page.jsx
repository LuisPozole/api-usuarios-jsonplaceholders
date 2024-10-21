import Link from "next/link"; // Importar Link de Next.js
import Boton from "@/components/boton";
import axios from "axios";

async function usuariosApp() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

export default async function Usuarios() {
    const usuarios = await usuariosApp();

    return (
        <div>
            <h1>Usuarios</h1>
            <p>Estas en usuarios</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User</th>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, id) => (
                        <tr key={id}>
                            <td>{usuario.id}</td>
                            <td>
                                <Link href={`/users/${usuario.id}`}>{usuario.name} </Link>
                            </td>
                            <td>{usuario.username}</td>
                            <td>{usuario.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
