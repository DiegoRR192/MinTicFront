import axios from "axios";

const getToken = () => {
  return `Bearer ${localStorage.getItem("token")}`;
};

export const obtenerVentas = () => {
  const url = "http://localhost:4000/api/ventas/";
  /* const options = {
    method: "GET",
    url: "http://localhost:4000/api/ventas/",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  }; */
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  });
};

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:4000/api/ventas/",
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarVenta = async (id, data) => {
  const url = "http://localhost:4000/api/ventas/" + id;

  await axios.put(url, data, {
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  });
};

export const eliminarVenta = async (id) => {
  const url = "http://localhost:4000/api/ventas/" + id;

  return await axios.delete(url, {
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  });
};
