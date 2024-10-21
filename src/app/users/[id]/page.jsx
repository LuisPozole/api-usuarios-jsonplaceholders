import axios from "axios";

async function usuariosApp() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

export default async function UsuarioDetalle({ params }) {
    const usuarios = await usuariosApp();
    const id = parseInt(params.id, 10);
    const usuario = usuarios[id - 1];

    return (
        <div>
            <h1>Detalles del Usuario</h1>
            {usuario ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Campo</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{usuario.id}</td>
                        </tr>
                        <tr>
                            <td>Nombre</td>
                            <td>{usuario.name}</td>
                        </tr>
                        <tr>
                            <td>Nombre de Usuario</td>
                            <td>{usuario.username}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{usuario.email}</td>
                        </tr>
                        <tr>
                            <td>Teléfono</td>
                            <td>{usuario.phone}</td>
                        </tr>
                        <tr>
                            <td>Sitio Web</td>
                            <td>
                                <a href={`https://${usuario.website}`} target="_blank" rel="noopener noreferrer">
                                    {usuario.website}
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Calle</td>
                            <td>{usuario.address.street}</td>
                        </tr>
                        <tr>
                            <td>Suite</td>
                            <td>{usuario.address.suite}</td>
                        </tr>
                        <tr>
                            <td>Ciudad</td>
                            <td>{usuario.address.city}</td>
                        </tr>
                        <tr>
                            <td>Código Postal</td>
                            <td>{usuario.address.zipcode}</td>
                        </tr>
                        <tr>
                            <td>Latitud</td>
                            <td>{usuario.address.geo.lat}</td>
                        </tr>
                        <tr>
                            <td>Longitud</td>
                            <td>{usuario.address.geo.lng}</td>
                        </tr>
                        <tr>
                            <td>Nombre de la Compañía</td>
                            <td>{usuario.company.name}</td>
                        </tr>
                        <tr>
                            <td>Frase de la Compañía</td>
                            <td>{usuario.company.catchPhrase}</td>
                        </tr>
                        <tr>
                            <td>BS de la Compañía</td>
                            <td>{usuario.company.bs}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>No se encontró el usuario con el ID proporcionado.</p>
            )}
        </div>
    );
}
