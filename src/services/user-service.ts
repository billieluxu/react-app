import apiClients, { AxiosError, CanceledError } from "./api-clients";

export interface User {
    id: number;
    name: String;
}

class UserService{
    getAllUsers(){
        const controller = new AbortController();
    
        const request = apiClients.get<User[]>("/users", {
            signal: controller.signal,
        })

        return {request, cancel: () => controller.abort()}
    }


}

export default new UserService();