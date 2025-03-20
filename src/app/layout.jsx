import Footer from '../../components/section/footer/Footer';
import Header from './_components/common/header/Header';
import ToolBar from './_components/common/toolbar/ToolBar';
import AppProvider from './context/AppProvider';
import AOSProvider from './context/AOSProvider';
import ProgressBarProvider from './context/ProgressBarProvider';
import { tripSansFont } from '../../public/fonts/font-family';
import '@/global/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-white ${tripSansFont.className}`}
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
