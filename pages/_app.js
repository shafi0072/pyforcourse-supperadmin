import '@/styles/globals.css'
import Layout from '@/src/components/core/layout'
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '@/src/config/ThemeConfig';
export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={darkTheme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
}
