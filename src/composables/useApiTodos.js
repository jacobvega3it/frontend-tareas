import axios from "axios";

export default function useApiTodos() {

    const obtenerTodos = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/todos');
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    return { obtenerTodos };
}