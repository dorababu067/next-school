import axios from "../utils/axios";

class StudentService {
  async create(schoolId, payload) {
    try {
      const response = await axios.post(
        `/schools/${schoolId}/students/`,
        payload
      );
      return response;
    } catch (error) {
      throw error.response.data;
    }
  }

  async list(id) {
    try {
      const response = await axios.get(`/schools/${id}/students/`);
      return response;
    } catch (error) {
      throw error.response.data;
    }
  }
  async retrieve(schoolId, studentId) {
    try {
      const response = await axios.get(
        `/schools/${schoolId}/students/${studentId}/`
      );
      return response;
    } catch (error) {
      throw error.response.data;
    }
  }

  async update(schoolId, studentId, payload) {
    try {
      const response = await axios.put(
        `/schools/${schoolId}/students/${studentId}/`,
        payload
      );
      return response;
    } catch (error) {
      throw error.response.data;
    }
  }

  async delete(schoolId, studentId) {
    try {
      const response = await axios.delete(
        `/schools/${schoolId}/students/${studentId}/`
      );
      return response;
    } catch (error) {
      throw error.response.data;
    }
  }
}

const studentService = new StudentService();

export default studentService;
