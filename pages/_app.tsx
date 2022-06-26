import '../styles/globals.css'
import type { AppProps } from 'next/app'
import i18next from '../utils/localization/i18n-config';
const initI18n = i18next;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
