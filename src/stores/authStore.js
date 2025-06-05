import { create } from "zustand";
import authApi from "../api/authApi";

const useAuthStore = create((set) => ({
  user: null,
  token: "",
  actionLogin: async (input) => {
    const res = await authApi.login(input);
    console.log('res.data.accessToken', res.data.accessToken)
    set({token: res.data.accessToken})
  }
}))

export default useAuthStore