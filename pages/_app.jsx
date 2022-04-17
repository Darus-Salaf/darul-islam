import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Layout from '../utils/Layout'

export default function MyApp({ Component, pageProps }) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}