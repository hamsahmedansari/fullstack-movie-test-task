"use client"
import { useRouter } from "next/navigation";
import { useAuth } from "./context/authContext";
import { useEffect } from "react";

const Home = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const redirectTo = user ? "/movie-list" : "/signin";
    router.push(redirectTo);
  }, [user, router]);

  return null;
};

export default Home;
