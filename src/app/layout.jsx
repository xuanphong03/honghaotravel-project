import "@/global/global.css";
import AppProvider from "./context/AppProvider";
import { fontTripSans } from "../../public/fonts/font-family";
import Header from "./_components/common/header/Header";
import ToolBar from "./_components/common/toolbar/ToolBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white ${fontTripSans.className}`}>
        <AppProvider>
          <Header />
          {children}
          <ToolBar />
        </AppProvider>
      </body>
    </html>
  );
}
