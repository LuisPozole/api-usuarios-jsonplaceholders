import axios from "axios";

async function universidadesMexico() {
    const url = "http://universities.hipolabs.com/search?country=Mexico";
    const universidades = await axios.get(url);
    return universidades.data;
}

export default async function Noticia({ params }) {
    const universidades = await universidadesMexico();

    // Convertir params.id a número y asegurarte de que esté dentro del rango del array
    const id = parseInt(params.id, 10);
    const universidad = universidades[id - 1] || null; // Obtener la universidad específica, ajustando el índice

    return (
        <div>
            <h1>Noticias</h1>
            <p>Estas en noticias</p>
            {universidad ? ( // Verificar si la universidad existe
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Universidad</th>
                            <th>Sitio web</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{id}</td> {/* Mostrar el ID original que comienza en 1 */}
                            <td>{universidad.name}</td>
                            <td>{universidad.web_pages[0]}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>No se encontró la universidad con el ID proporcionado.</p>
            )}
        </div>
    );
}
