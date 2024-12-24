"use client";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  use,
  useEffect,
} from "react";
import { toast } from "react-toastify";

interface User {
  id: string;
  email: string;
  rememberMe: boolean;
}

interface AuthContextType {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const signIn = async (user: User) => {
        if (user.rememberMe) {
          localStorage.setItem("user", JSON.stringify(user));
        }
        setUser(user);
  };

  const signOut = () => {
    setUser(null);
    router.replace("/signin");
    localStorage.removeItem("user");
    toast.success("Logout Successful!");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
