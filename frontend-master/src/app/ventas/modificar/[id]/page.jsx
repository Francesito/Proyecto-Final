"use client";
export default function Modificar({ params }) {
    const venta = JSON.parse(decodeURIComponent(params.id));

    const modificarVenta = async (e) => {
        e.preventDefault();

        const data = {
            id: venta.id,
            cantidad: document.getElementById("cantidad").value
        };

        const url = "http://localhost:3000/ventas/modificarVenta";

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        location.replace("http://localhost:3001/ventas/mostrar");
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#fff' }}> {/* Fondo blanco */}
            <form style={{ width: '40%', marginTop: '5%', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} onSubmit={modificarVenta}>
                <div style={{ backgroundColor: '#001f36', color: '#fff', padding: '15px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
                    <h1 style={{ textAlign: 'center' }}>Modificar Venta</h1>
                </div>
                <div style={{ padding: '20px' }}>
                    <input id="id" defaultValue={venta.id} type="text" style={inputStyle} className="d-none" />
                    <input id="cantidad" defaultValue={venta.cantidad} type="text" style={inputStyle} placeholder="Cantidad" />
                </div>
                <div style={{ padding: '15px' }}>
                    <button type="submit" style={buttonStyle}>Guardar cambios</button>
                </div>
            </form>
        </div>
    );
}

// Estilos
const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
};

const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#001f36', // Color oscuro
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
};
