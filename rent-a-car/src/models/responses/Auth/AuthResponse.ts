export interface AuthResponse {
	message: string;
	userId: number;
	accessToken: string;
	refreshToken: string;
}