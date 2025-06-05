import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: "",
  actionLogin: async (input) => {
    
  }
}))

export default useAuthStore