"use client";
export default function Modificar({ params }) {
    const usuario = JSON.parse(decodeURIComponent(params.id));

    const modificarUsuario = async (e) => {
        e.preventDefault();

        const data = {
            id: usuario.id,
            nombre: document.getElementById("nombre").value,
            usuario: document.getElementById("usuario").value,
            password: document.getElementById("password").value,
        };

        const url = "http://localhost:3000/usuarios/modificarUsuario";

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        location.replace("http://localhost:3001/usuarios/mostrar");
    };

    return (
        <div style={containerStyle}>
            <form style={formStyle} onSubmit={modificarUsuario}>
                <div style={headerStyle}>
                    <h1 style={headerTextStyle}>Modificar Usuario</h1>
                </div>
                <div style={inputContainerStyle}>
                    <input id="id" defaultValue={usuario.id} type="text" style={hiddenInputStyle} />
                    <input id="nombre" defaultValue={usuario.nombre} type="text" placeholder="Nombre" style={inputStyle} />
                    <input id="usuario" defaultValue={usuario.usuario} type="text" placeholder="Usuario" style={inputStyle} />
                    <input id="password" required placeholder="Nuevo password" type="text" style={inputStyle} />
                </div>
                <div style={buttonContainerStyle}>
                    <button type="submit" style={buttonStyle}>Guardar cambios</button>
                </div>
            </form>
        </div>
    );
}

// Estilo del contenedor principal
const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f1f4f8',
    alignItems: 'center',
};

// Estilo para el formulario
const formStyle = {
    width: '400px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
};

// Estilo del encabezado
const headerStyle = {
    backgroundColor: '#001f36',
    color: '#fff',
    padding: '15px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    textAlign: 'center',
};

const headerTextStyle = {
    margin: 0,
    fontSize: '24px',
};

// Estilo para los contenedores de los inputs y botones
const inputContainerStyle = {
    padding: '20px',
};

// Estilo de los inputs
const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
};

inputStyle[':focus'] = {
    borderColor: '#001f36',
};

// Estilo para el input oculto
const hiddenInputStyle = {
    display: 'none',
};

// Estilo para el contenedor del botón
const buttonContainerStyle = {
    padding: '15px',
};

// Estilo del botón
const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#001f36',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
};

// Efecto al pasar el ratón sobre el botón
buttonStyle[':hover'] = {
    backgroundColor: '#00446e',
};
