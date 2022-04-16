import Footer from "../components/Shared/Footer";
import Navigation from "../components/Shared/Navigation";

export default function Layout({ children }) {
  return <>
    <Navigation />
    {children}
    <Footer />
  </>
}
