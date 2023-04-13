import apiBaseUrlAxios from '../utils/apiBaseUrlAxios';
import applyURIFilter from '../utils/apply-url-filter';

const MODEL_PLURAL = 'students';

export type userType = {
	fullName?: string;
	gender?: string;
	avatar?: string;
	id?: string;
	status?: string;
	birthDay?: string;
	createdAt?: Date;
	email?: string;
	role?: string;
	phone?: string;
	password?: string;
	updatedAt?: Date;
	emailVerified?: boolean;
	isLinkedGoogle?: boolean;
	isLinkedFacebook?: boolean;
	isLinkedApple?: boolean;
	lastCheckin?: Date;
	expiredUsingApp?: Date;
	levelIds?: any[];
	wallet?: any[];
	onlineCourses?: any[];
	watchedVideo?: boolean;
	tutorId?: string;
	expectedTarget?: string;
	note?: string;
};

type listResponse = {
	data: userType[];
	skip: number;
	total: number;
	limit: number;
};

export type changePasswordProps = {
	oldPassword: string;
	newPassword: string;
};

export type loginPayload = {
	email?: string;
	password?: string;
};

export interface loginResponse {
	id: string;
	role: string;
	userId: string;
	ttl: number;
	user: userType;
}

export type resetPasswordParams = {
	token?: string;
	newPassword?: string;
};

export const count = (params: any) =>
	apiBaseUrlAxios.get<any, { count: number }>(`/${MODEL_PLURAL}/count${applyURIFilter(params, 'where')}`);

export const create = (payload: userType) => apiBaseUrlAxios.post<userType, userType>(`/${MODEL_PLURAL}`, payload);

export const update = (payload: userType) => {
	const { id, ...rest } = payload;
	return apiBaseUrlAxios.patch<userType, userType>(`/${MODEL_PLURAL}/${id}`, rest);
};

export const getOne = (params: any) => {
	const { id, filter } = params;
	return apiBaseUrlAxios.get<any, userType>(`/${MODEL_PLURAL}/${id || 'findOne'}${applyURIFilter(filter)}`);
};

export const getList = (filter: any) =>
	apiBaseUrlAxios.get<undefined, listResponse>(`/${MODEL_PLURAL}${applyURIFilter(filter)}`);

export const remove = (id: string) => apiBaseUrlAxios.delete(`/${MODEL_PLURAL}/${id}`);

export const resendInvitation = (email: string) =>
	apiBaseUrlAxios.post(`/${MODEL_PLURAL}/resend-invitation`, { email });

export const getUserAuth = (userId: string) => apiBaseUrlAxios.get<undefined, userType>(`/${MODEL_PLURAL}/${userId}`);

export const checkIn = () => apiBaseUrlAxios.get<undefined, userType>(`/${MODEL_PLURAL}/checkin`);

export const updateProfile = (userId: string, payload = {}) =>
	apiBaseUrlAxios.post<userType, userType>(`/${MODEL_PLURAL}/${userId}`, payload);

export const login = (payload: loginPayload) => {
	return apiBaseUrlAxios.post<loginPayload, loginResponse>(`/${MODEL_PLURAL}/login`, payload);
};

export const logout = () => apiBaseUrlAxios.post(`/${MODEL_PLURAL}/logout`);

export const forgotPassword = (email: string) => apiBaseUrlAxios.post(`/${MODEL_PLURAL}/reset`, { email });

export const resetPassword = (payload: resetPasswordParams) => {
	const { token, newPassword } = payload;
	return apiBaseUrlAxios.post(`/${MODEL_PLURAL}/reset-password?access_token=${token}`, { newPassword });
};

export const changePassword = (payload: changePasswordProps) => {
	return apiBaseUrlAxios.post(`/${MODEL_PLURAL}/change-password`, payload);
};

export const loginApple = (credential: any) => {
	return apiBaseUrlAxios.post<undefined, loginResponse>(`/${MODEL_PLURAL}/login-apple`, credential);
};

export const loginFacebook = (accessToken: string) => {
	return apiBaseUrlAxios.post<undefined, loginResponse>(`/${MODEL_PLURAL}/login-facebook`, { accessToken });
};

export const loginGoogle = (accessToken: string) => {
	return apiBaseUrlAxios.post<undefined, loginResponse>(`/${MODEL_PLURAL}/login-google`, { accessToken });
};

export const register = (userData: userType) => {
	return apiBaseUrlAxios.post<undefined, userType>(`/${MODEL_PLURAL}/register`, { userData });
};

export const generateZoomSignature = (payload: any) => {
	return apiBaseUrlAxios.post<undefined, string>(`/${MODEL_PLURAL}/generateZoomSignature`, payload);
};
