import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Header from '../components/Home/Header'
import Featured from '../components/Home/Featured'
import JoinUs from '../components/Home/JoinUs'
import Working from '../components/Home/Working'
import Contact from '../components/Home/Contact'
import Adviser from '../components/Home/Adviser'
import Projects from '../components/Home/Projects'
import Blog from '../components/Home/Blog'
import Footer from '../components/Shared/Footer'

export default function IndexPage() {
  return <>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css" />
      <link href="https://fonts.maateen.me/kalpurush/font.css" rel="stylesheet" />
      <title>Darul Islam Foundation</title>
      <meta property="og:title" content="Darus Salaf Foundation" />
      <meta property="og:description" content="A non-profit organization for preaching the Truth and Light of Islam with the guidance of the Holy Quran and Sahih Sunnah according to the footsteps of the Righteous Preceders." />
      <meta property="og:image" content="/banner.jpg" />
      <meta property="og:url" content="https://darulislam.foundation" />
      <meta name="keywords" content="darussalaf darus salaf salaf-salehin darus-salaf foundation preaching quran sahih sunnah preceders" />
    </Head>
    <Working />
    <div style={{ maxWidth: '1300px', margin: 'auto' }}>
      <Header />
      <Featured /> <hr className="mt-12" />
      <Adviser />
      <Projects />
      <JoinUs />
      <Blog />
      <Contact />
      <Footer />
    </div>
  </>
}