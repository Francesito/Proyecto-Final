import BorrarUsuario from "@/components/borrar";
import axios from "axios";
import Link from "next/link";

async function getUsuarios() {
    const url = "http://localhost:3000/usuarios";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

export default async function Usuarios() {
    const usuarios = await getUsuarios();
    return (
        <>
            <h1 style={headerStyle}>Usuarios</h1>
            <table style={tableStyle}>
                <thead>
                    <tr style={headerRowStyle}>
                        <th style={tabEncabezado}>Id</th>
                        <th style={tabEncabezado}>Nombre</th>
                        <th style={tabEncabezado}>Usuario</th>
                        <th style={tabEncabezado}>Editar/Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, i) => (
                        <tr key={i} style={i % 2 === 0 ? { backgroundColor: '#f9f9f9' } : { backgroundColor: '#ffffff' }}>
                            <td style={tabstyle2}>{i + 1}</td>
                            <td style={tabstyle2}>{usuario.nombre}</td>
                            <td style={tabstyle2}>{usuario.usuario}</td>
                            <td style={tabstyle2}>
                                <BorrarUsuario id={usuario.id} />
                                <> / </>
                                <Link href={`/usuarios/modificar/${encodeURIComponent(JSON.stringify({ id: usuario.id, nombre: usuario.nombre, usuario: usuario.usuario }))}`}>
                                    Modificar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={buttonContainerStyle}>
                <Link href="/usuarios/nuevo" style={buttonStyle}>Nuevo</Link>
            </div>
        </>
    );
}

// Estilos
const headerStyle = {
    textAlign: 'center',
    color: '#333',
    marginTop: '30px',
    fontSize: '28px',
};

const tableStyle = {
    width: '80%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const headerRowStyle = {
    backgroundColor: '#001f36',
    color: '#fff',
};

const tabEncabezado = {
    padding: '12px',
    border: '1px solid #ccc',
    textAlign: 'left',
    fontWeight: 'bold',
    backgroundColor: '#001f36',
    color: '#fff',
};

const tabstyle2 = {
    padding: '12px',
    border: '1px solid #ccc',
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
};

const buttonStyle = {
    padding: '12px 20px',
    backgroundColor: '#001f36',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'inline-block',
};
