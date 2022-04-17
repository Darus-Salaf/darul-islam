import Head from 'next/head'
import Header from '../components/Home/Header'
import Featured from '../components/Home/Featured'
import JoinUs from '../components/Home/JoinUs'
import Contact from '../components/Home/Contact'
import Adviser from '../components/Home/Adviser'
import Projects from '../components/Home/Projects'
import Blog from '../components/Home/Blog'

export default function IndexPage() {
  return <>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css" />
      <link href="https://fonts.maateen.me/kalpurush/font.css" rel="stylesheet" />
      <title>দারুল ইসলাম ফাউন্ডেশন</title>
      <meta property="og:title" content="দারুল ইসলাম ফাউন্ডেশন" />
      <meta property="og:description" content="A non-profit organization for preaching the Truth and Light of Islam with the guidance of the Holy Quran and Sahih Sunnah according to the footsteps of the Righteous Preceders." />
      <meta property="og:image" content="/images/banner.jpg" />
      <meta property="og:url" content="https://darulislam.foundation" />
      <meta name="keywords" content="darul islam darul islam salaf-salehin darul-islam foundation preaching quran sahih sunnah preceders" />
    </Head>
    <div style={{ maxWidth: '1300px', margin: 'auto' }}>
      <Header />
      <Featured /> <hr className="mt-12" />
      <Adviser />
      <Projects />
      <JoinUs />
      <Blog />
      <Contact />
    </div>
  </>
}