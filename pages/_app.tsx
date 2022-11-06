import '../styles/globals.css'
import 'swiper/css';
import "antd/dist/antd.css"


import type { AppProps } from 'next/app'
import StoreWrapper from '../StoreWrapper';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreWrapper>
      <Component {...pageProps} />
    </StoreWrapper>
  )
}
