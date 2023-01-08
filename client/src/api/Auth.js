import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showErrorToast } from "../utils/toastmessage";

const API = "https://shecan-production.up.railway.app";

export const ProfRegister = async (creds) => {
  try {
    const response = await Axios.post(`${API}/professional/register`, creds);
    return response;
  } catch (error) {
    console.log(error);
    if (error.response.status === 409) {
      showErrorToast(error.response.data.message);
    }
  }
};

export const ProfLogin = async (creds) => {
  try {
    const response = await Axios.post(`${API}/professional/login`, creds);
    return response;
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      showErrorToast(error.response.data.message);
    }
  }
};
