import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import { About } from '@/components/Homepage/About';
import Contact from '@/components/Homepage/Contact';
import Skills from '@/components/Homepage/Skills';
import Work from '@/components/Homepage/Work';

export default function Home() {
  return (
    <>
      <header className="header container">
        <Header></Header>
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
