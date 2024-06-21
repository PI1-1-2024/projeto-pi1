import ApiService from "../config/ApiService";

class CarroService extends ApiService {
  constructor() {
    super("/percurso-carro");
  }

  getCarroById(id) {
    return this.get(`/${id}`);
  }
}

export default CarroService;