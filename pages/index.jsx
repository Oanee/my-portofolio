import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import { About } from '@/components/Homepage/About';
import Contact from '@/components/Homepage/Contact';
import Skills from '@/components/Homepage/Skills';
import Work from '@/components/Homepage/Work';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="header container">
        <Header></Header>

        <div className="header-scroll">
          <Link href="#about-jump" className="header-scroll-circle">
            <div className="header-scroll-circle-wheel"></div>
            <div className="header-scroll-circle-wheel-arrows">
              <div className="arrow arrow-1"></div>
              <div className="arrow arrow-2"></div>
              <div className="arrow arrow-3"></div>
            </div>
          </Link>
        </div>
      </header>

      <main className="container">
        <div className="content">
          <About></About>

          <Work></Work>

          <Skills></Skills>

          <Contact></Contact>
        </div>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
