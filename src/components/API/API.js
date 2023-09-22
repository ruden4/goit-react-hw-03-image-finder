import axios from "axios";

const API_KEY = "38794052-11ed7c3031d83bd0448aacf33";
let perPage = 12;

export const getRequestData = async (requestVal, pageNumber) => {
    const { data }  = await axios.get(`https://pixabay.com/api/?q=${requestVal}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
    return data;
};