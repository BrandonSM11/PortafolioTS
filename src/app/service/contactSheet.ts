import axios from "axios";

interface ContactData {
  name: string;
  email: string;
  message: string;
}

export const sendContactToSheet = async (data: ContactData) => {
  const response = await axios.post("/api/contact-sheet", data);
  return response.data;
};
