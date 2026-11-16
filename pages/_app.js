import { useEffect } from "react";
import { useRouter } from "next/router";
import "../static/styles.css";
import { initAnimaciones } from "../static/animations.js";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initAnimaciones();
  }, [router.asPath]);

  return <Component {...pageProps} />;
}
