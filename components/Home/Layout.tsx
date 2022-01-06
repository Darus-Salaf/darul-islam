import Header from "./Header"
import 'tailwindcss/tailwind.css'

const Layout = ({ children }) => (
  <>
    <header>
      <h1>This is navigation</h1>
    </header>
    {children}
    <footer>
      <h1>This is Footer</h1> <hr />
    </footer>
  </>
)

export default Layout
