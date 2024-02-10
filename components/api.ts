import axios from "axios";

const apiUrl = "https://autoderm.ai/v1/query";

export const sendFormData = async (age: number, sex: string, image: File): Promise<any> => {
  const formData = new FormData();
  formData.append("age", age.toString());
  formData.append("sex", sex);
  formData.append("image_uploads", image);

  try {
    const response = await axios.post(`${apiUrl}/img/`, formData);
    return response.data;
  } catch (error) {
    console.error("Error sending form data:", error);
    throw error;
  }
};
