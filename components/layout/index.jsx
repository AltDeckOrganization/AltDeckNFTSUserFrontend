import Nav from "../navbar";
import Footer from "../footer";
import SEO from "../seo/SEO";

export default function Layout({ children }) {
  return (
    <>
    <SEO/>
      <Nav />
      <main
      >{children}</main>
      <Footer />
    </>
  );
}
