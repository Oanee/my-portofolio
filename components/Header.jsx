import Link from 'next/link';

export function Header() {
  return (
    <>
      <section className="header-section container">
        <div className="header-section-top">
          <div className="header-section-top-image">
            <Link href="/">
              <picture className="header-section-top-image-picture">
                <img
                  src="/images/bird.png"
                  alt="Home"
                  className="header-section-top-image-picture-bird"
                />
              </picture>
            </Link>
          </div>

          <ul className="header-section-top-list">
            <li>
              <Link href="#about-jump">About</Link>
            </li>

            <li>
              <Link href="#work-jump">Work</Link>
            </li>

            <li>
              <Link href="#skills-jump">Skills</Link>
            </li>

            <li>
              <Link href="#contact-jump">Contact</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
