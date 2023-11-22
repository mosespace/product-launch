import "../styles/main.css";
import { raleway } from "../styles/fonts";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "Cross-Tagging Feature to Increase Project Visibility | Wrike",
  description: "Created by Kisakye Moses",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={raleway.className}>
        <NavBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
