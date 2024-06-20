import ApiService from "../config/ApiService";

class CarroService extends ApiService {
  constructor() {
    super("/carro");
  }

  save(carro) {
    return this.post("/", carro);
  }

  update(id, carro) {
    return this.put(`/${id}`, carro);
  }

  delete(id) {
    return this.delete(`/${id}`);
  }

  getCarros() {
    return this.get();
  }

  getCarroById(id) {
    return this.get(`/${id}`);
  }
}