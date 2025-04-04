import React, { useState, useEffect } from "react";
import axios from "axios";

const TablaProductos = () => {
  const [productos, setProductos] = useState([]);

  // Fetch productos al cargar la página
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/producto")
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  // Función para agregar un nuevo producto al estado
  const agregarProducto = (nuevoProducto) => {
    setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Listado de Productos</h2>
      <table style={styles.table}>
        <thead style={styles.thead}>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Nombre</th>
            <th style={styles.th}>Descripción</th>
            <th style={styles.th}>Precio</th>
            <th style={styles.th}>Stock</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={producto.id} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
              <td style={styles.td}>{producto.id}</td>
              <td style={styles.td}>{producto.name}</td>
              <td style={styles.td}>{producto.description}</td>
              <td style={styles.td}>${producto.price.toFixed(2)}</td>
              <td style={styles.td}>{producto.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  thead: {
    backgroundColor: "#007bff",
    color: "#fff",
  },
  th: {
    padding: "12px",
    textAlign: "left",
    fontSize: "16px",
    border: "1px solid #ddd",
  },
  td: {
    padding: "12px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },
  rowEven: {
    backgroundColor: "#f2f2f2",
  },
  rowOdd: {
    backgroundColor: "#fff",
  },
};

export default TablaProductos;
