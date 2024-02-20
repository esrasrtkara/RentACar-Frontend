class TokenService {
    getToken(){
        return localStorage.getItem("token");
    }
    setToken(token:string){
        localStorage.setItem("token",token);
    }
    clearToken(){
        localStorage.removeItem("token");
    }
}

const tokenService = new TokenService()
export default tokenService;