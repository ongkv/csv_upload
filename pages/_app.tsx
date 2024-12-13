import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/navbar/Navbar";
import { CssBaseline } from "@mui/material";
import { useRouter } from "next/router";
import { SnackbarProvider } from "@/components/snackbar/useSnackbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>ST Technical Assessment</title>
        <meta
          name="description"
          content="Upload and and view data from a CSV file"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CssBaseline />
      <NavBar router={router} />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <SnackbarProvider>
            <Component {...pageProps} />
          </SnackbarProvider>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://github.com/ongkv/csv_upload"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            GitHub →
          </a>
          <a
            href="https://www.linkedin.com/in/ong-kel-vyn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            LinkedIn →
          </a>
        </footer>
      </div>
    </>
  );
}
