import axios from "../utils/axios";

class SchoolService {
  async create(payload) {
    try {
      const response = await axios.post("/schools/", payload);
      return response;
    } catch (error) {
      throw error.response.data;
    }
  }

  async list() {
    try {
      const response = await axios.get("/schools/");
      return response;
    } catch (error) {
      throw error.response.data;
    }
  }
  async retrieve(id) {
    try {
      const response = await axios.get(`/schools/${id}/`);
      return response;
    } catch (error) {
      throw error.response.data;
    }
  }

  async update(id, payload) {
    try {
      const response = await axios.put(`/schools/${id}/`, payload);
      return response;
    } catch (error) {
      throw error.response.data;
    }
  }

  async delete(id) {
    try {
      const response = await axios.delete(`/schools/${id}/`);
      return response;
    } catch (error) {
      throw error.response.data;
    }
  }
}

const school = new SchoolService();

export default school;
