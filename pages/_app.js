import '../styles/globals.css';
import { Header, Footer, Widgets } from '../components/';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <script src="https://cdn.tailwindcss.com"></script>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
