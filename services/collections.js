import axios from "axios"

const { NEXT_PUBLIC_SERVER } = process.env;

const axiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_SERVER,
  maxRedirects: 0,
  headers: {
    accept: "Application/json"
  }
});

export const getCollections = async(address) => {
  try {
    return await axiosInstance.get(`/api/collections?public_key=${address}`);
  } catch (error) {
    throw error;
  }
}
