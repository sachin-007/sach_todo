import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { store } from '../store';
import { checkAuth } from '../store/slices/authSlice';
// import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import '../styles/custom.css'; // Ensure this path is correct


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await store.dispatch(checkAuth()).unwrap();
        if (router.pathname === '/login' || router.pathname === '/signup') {
          router.push('/dashboard');
        }
      } catch (error) {
        if (router.pathname !== '/login' && router.pathname !== '/signup') {
          router.push('/login');
        }
      }
    };

    checkAuthentication();
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;