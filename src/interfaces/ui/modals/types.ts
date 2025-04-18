export interface AuthResponse {
    body: {
        user: User;
        accessToken: string;
        refreshToken: string; 
    }
}

export interface AuthResponsError {
    body: {
        error: string;
    }
}

export interface User {
    _id: string;
    name: string;
    email: string; 
}

export interface AccessTokenResponse{
    statusCode: number;
    body: {
        accessToken: string;
    };
    error?: string;
}