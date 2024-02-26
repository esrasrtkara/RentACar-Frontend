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
    getRefreshToken(){
        return localStorage.getItem("refreshToken");
    }
    setRefreshToken(refreshToken:string){
        localStorage.setItem("refreshToken",refreshToken);
    }
    clearRefreshToken(){
        localStorage.removeItem("refreshToken");
    }
}

const tokenService = new TokenService()
export default tokenService;