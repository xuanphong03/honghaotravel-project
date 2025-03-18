import '@/global/global.css';
import Footer from '../../components/section/footer/Footer';
import { fontTripSans } from '../../public/fonts/font-family';
import Header from './_components/common/header/Header';
import ToolBar from './_components/common/toolbar/ToolBar';
import AppProvider from './context/AppProvider';
import AOSProvider from './context/AOSProvider';
import ProgressBarProvider from './context/ProgressBarProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-white ${fontTripSans.className}`}
        suppressHydrationWarning={true}
      >
        <ProgressBarProvider>
          <AOSProvider>
            <AppProvider>
              <Header />
              <main className="bg-white">{children}</main>
              <Footer />
              <ToolBar />
            </AppProvider>
          </AOSProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
