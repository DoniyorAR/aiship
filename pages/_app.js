import '../styles/globals.css'
import Layout from '../components/Layout'
import { useRouter } from "next/router";
import { useEffect } from "react";

function useAuthProtect() {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") return;
    if (typeof window !== "undefined") {
      const isAuthed = localStorage.getItem("gachon_ai_auth") === "1";
      if (!isAuthed) router.replace("/");
    }
  }, [router.pathname]);
}

export default function App({ Component, pageProps }) {
  useAuthProtect();
  const router = useRouter();
  // Hide layout on login page
  if (router.pathname === "/") {
    return <Component {...pageProps} />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
