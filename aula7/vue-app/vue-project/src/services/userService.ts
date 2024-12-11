import type { User } from "@/models/User"
import axios from "axios"

export const getUser = async (username: string) : Promise<User> => {
    const response = await axios.get("http://localhost:3000/user/" + username);
    return response.data;
}