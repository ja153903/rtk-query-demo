require('../mocks');

import '../styles/globals.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import { store } from '../state';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
