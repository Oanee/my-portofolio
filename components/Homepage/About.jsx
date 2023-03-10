export function About() {
  return (
    <>
      <div className="about">
        <header>
          <h1 id="about-jump">About</h1>
        </header>

        <div className="about-content">
          <div className="about-content-photo">
            <picture>
              <img src="/images/Profile-Picture.png" alt="Me" />
            </picture>
          </div>

          <div className="about-content-description">
            <p className="about-content-description-paragraph">
              Meet a passionate front-end developer with diverse experience in
              writing semantic, responsive HTML/CSS and working with different
              frontend frameworks. Actively seeking a job where I can use my
              knowledge to advance my career to the next stage. I also possess
              good written and oral communication skills, which enable me to
              explain web app issues in easy to understand terms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
