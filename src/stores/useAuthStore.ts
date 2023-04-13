import produce from 'immer';
import create from 'zustand';

import { logout, userType } from 'src/apis/student';

type AuthStoreType = {
	auth: userType;
	setAuth: (userData?: userType) => void;
	logout: () => void;
	setWatchedVideo: () => void;
};

export const useAuthStore = create<AuthStoreType>((set, get) => ({
	auth: {},
	setAuth: (userData?: userType) => {
		set({ auth: userData });
	},
	setWatchedVideo: () => {
		set(
			produce((state) => {
				state.auth.watchedVideo = true;
			}),
		);
	},
	logout: async () => {
		set({ auth: {} });
		await logout();
	},
}));
