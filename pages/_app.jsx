import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TouchForm from '@/components/TouchForm';
import CustomCursor from '@/components/CustomCursor';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <TouchForm/>
      <Footer />
    </>
  );
}

