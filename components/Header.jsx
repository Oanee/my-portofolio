import { Link } from 'react-scroll';

export function Header() {
  return (
    <>
      <section className="header-section container">
        <div className="header-section-top">
          <div className="header-section-top-image">
            <Link
              to="about-jump"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-1000}
              duration={500}
            >
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
              <Link
                to="about-jump"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
                isDynamic={true}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="work-jump"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                Work
              </Link>
            </li>

            <li>
              <Link
                to="skills-jump"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="contact-jump"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
