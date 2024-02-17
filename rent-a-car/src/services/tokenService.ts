class TokenService {
    getToken(){
        return localStorage.getItem("token");
    }
    setToken(token:string){
        localStorage.setItem("token",token);
    }
}

const tokenService = new TokenService();
export default tokenService;