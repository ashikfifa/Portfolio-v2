import { ReactNode } from "react";
import localFont from "next/font/local";

import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import { routes } from "@/data/navigationRoutes";
import { classNames } from "@/utility/classNames";

const montserrat = localFont({
  src: [
    {
      path: "/fonts/montserrat/Montserrat-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/montserrat/Montserrat-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div className={classNames("min-h-screen", montserrat.className)}>
        <Navbar routes={routes} />
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
}
