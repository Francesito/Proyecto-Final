"use client";
import axios from "axios";
import { useState } from "react";

async function nuevaVenta(e) {
    e.preventDefault();
    const url = "http://localhost:3000/ventas/nuevaVenta";
    const datos = {
        cantidad: document.getElementById("cantidad").value,
        id_producto: document.getElementById("id_producto").value,
        id_usuario: document.getElementById("id_usuario").value
    };
    await axios.post(url, datos);
    location.replace("http://localhost:3001/ventas/mostrar");
}

export default function Nueva() {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: isHovered ? '#007bff' : '#0056b3', // Azul claro y oscuro al pasar el ratón
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={nuevaVenta} style={formStyle}>
                <div style={cardStyle}>
                    <div style={cardHeaderStyle}>
                        <h1 style={{ margin: 0, color: '#fff' }}>Nueva Venta</h1>
                    </div>
                    <div style={cardBodyStyle}>
                        <input id="cantidad" required placeholder="Cantidad" autoFocus type="text" style={inputStyle} />
                        <input id="id_producto" required placeholder="ID Producto" type="text" style={inputStyle} />
                        <input id="id_usuario" required placeholder="ID Usuario" type="text" style={inputStyle} />
                    </div>
                    <div style={cardFooterStyle}>
                        <button
                            type="submit"
                            style={buttonStyle}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Guardar venta
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

// Estilos personalizados
const formStyle = {
    display: 'flex',
    justifyContent: 'center',
};

const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const cardHeaderStyle = {
    backgroundColor: '#001f36', // Azul oscuro
    padding: '15px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
};

const cardBodyStyle = {
    padding: '15px',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
};

const cardFooterStyle = {
    padding: '15px',
};
