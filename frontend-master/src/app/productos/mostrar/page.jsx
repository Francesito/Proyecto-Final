import BorrarProducto from "@/components/borrarP";
import axios from "axios";
import Link from "next/link";

async function getProductos() {
    const url = "http://localhost:3000/productos";
    const productos = await axios.get(url);
    return productos.data;
}

export default async function Produtos() {
    const tabEncabezado = {
        padding: '10px',
        border: '1px solid #ccc',
        textAlign: 'left',
        fontWeight: 'bold',
        backgroundColor: '#001f36', // Color rojo
        color: '#fff', // Texto blanco
    };

    const tabstyle2 = {
        padding: '10px',
        border: '1px solid #ccc',
    };

    const productos = await getProductos();
    return (
        <>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Productos</h1>
            <table style={{ width: '80%', margin: '20px auto', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={tabEncabezado}>Id</th>
                        <th style={tabEncabezado}>Producto</th>
                        <th style={tabEncabezado}>Precio</th>
                        <th style={tabEncabezado}>Cantidad</th>
                        <th style={tabEncabezado}>Editar/Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, i) => (
                        <tr key={i} style={i % 2 === 0 ? { backgroundColor: '#f9f9f9' } : { backgroundColor: '#ffffff' }}>
                            <td style={tabstyle2}>{i + 1}</td>
                            <td style={tabstyle2}>{producto.producto}</td>
                            <td style={tabstyle2}>${producto.precio}</td>
                            <td style={tabstyle2}>{producto.cantidad}</td>
                            <td style={tabstyle2}>
                                <BorrarProducto id={producto.id}></BorrarProducto>
                                <> / </>
                                <Link href={`/productos/modificar/${encodeURIComponent(JSON.stringify({ id: producto.id, producto: producto.producto, cantidad: producto.cantidad, precio: producto.precio }))}`}>
                                    Modificar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <Link href="/productos/nuevo" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
                    Nuevo
                </Link>
            </div>
        </>
    );
}
