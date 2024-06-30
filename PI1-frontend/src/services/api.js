import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const Service = {
  createPercurso: async (props) => {
    return api.post("/percurso-carro", props);
  },
  getPercursos: async (id) => {
    return api.get(`/percurso-carro/${id}`).then((res) => res.data);
  },
  getAllPercursos: async () => {
    return api.get("/percurso-carro").then((res) => res.data);
  },
};
