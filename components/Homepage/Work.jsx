import Link from 'next/link';

export default function Work() {
  return (
    <>
      <div className="work">
        <header>
          <h1 id="work-jump">Work</h1>
        </header>

        <div className="work-projects">
          <div>
            <article className="work-projects-content">
              <a
                href="https://eloquent-scone-6c5bb4.netlify.app/"
                title="Thread Affair"
                target="_blank"
                rel="noopener noreferrer"
              >
                <picture>
                  <img src="/images/T.A.png" alt="Thread Affair" />
                </picture>
              </a>

              <div className="work-projects-content-description">
                <a
                  href="https://eloquent-scone-6c5bb4.netlify.app/"
                  title="Thread Affair"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Thread Affair
                </a>

                <a
                  href="https://github.com/Oanee/ta-boston"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-lg-row-reverse justify-content-lg-end"
                >
                  <i class="fa-brands fa-github"></i>
                  Github
                </a>
              </div>
            </article>
          </div>

          <div className="d-flex justify-content-end ">
            <article className="work-projects-content flex-lg-row-reverse">
              <a
                href="https://relaxed-pixie-565e99.netlify.app/"
                title="Monochrome"
                target="_blank"
                rel="noopener noreferrer"
              >
                <picture className="work-projects-content-picture">
                  <img src="/images/Monochrome.png" alt="Monochrome" />
                </picture>
              </a>

              <div className="work-projects-content-description align-items-lg-end">
                <a
                  href="https://relaxed-pixie-565e99.netlify.app/"
                  title="Monochrome"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Monochrome
                </a>

                <a
                  href="https://github.com/Oanee/Monochrome"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                  Github
                </a>
              </div>
            </article>
          </div>

          <div>
            <article className="work-projects-content">
              <a
                href="https://startling-rugelach-b2ddf9.netlify.app/"
                title="Clock"
                target="_blank"
                rel="noopener noreferrer"
              >
                <picture className="work-projects-content-picture">
                  <img src="/images/Clock.png" alt="Clock" />
                </picture>
              </a>

              <div className="work-projects-content-description">
                <a
                  href="https://startling-rugelach-b2ddf9.netlify.app/"
                  title="Clock"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clock
                </a>

                <a
                  href="https://github.com/Oanee/clock"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-lg-row-reverse justify-content-lg-end"
                >
                  <i class="fa-brands fa-github"></i>
                  Github
                </a>
              </div>
            </article>
          </div>

          <div className="d-flex justify-content-end">
            <article className="work-projects-content flex-lg-row-reverse">
              <a
                href="https://dazzling-sprinkles-efd334.netlify.app"
                title="Number Guessing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <picture className="work-projects-content-picture">
                  <img
                    src="/images/Number Guessing.png"
                    alt="Number Guessing"
                  />
                </picture>
              </a>

              <div className="work-projects-content-description align-items-lg-end">
                <a
                  href="https://dazzling-sprinkles-efd334.netlify.app"
                  title="Number Guessing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Number Guessing
                </a>

                <a
                  href="https://github.com/Oanee/number-guessing"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                  Github
                </a>
              </div>
            </article>
          </div>

          <div>
            <article className="work-projects-content">
              <a
                href=" https://elegant-twilight-cb4e55.netlify.app/"
                title="Rock Paper SCissors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <picture className="work-projects-content-picture">
                  <img
                    src="/images/Rock Paper Scissors.png"
                    alt="Rock Paper SCissors"
                  />
                </picture>
              </a>

              <div className="work-projects-content-description">
                <a
                  href=" https://elegant-twilight-cb4e55.netlify.app/"
                  title="Rock Paper SCissors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rock Paper Scissors
                </a>

                <a
                  href="https://github.com/Oanee/rock-paper-scissors"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-lg-row-reverse justify-content-lg-end"
                >
                  <i class="fa-brands fa-github"></i>
                  Github
                </a>
              </div>
            </article>
          </div>

          <div className="d-flex justify-content-end">
            <article className="work-projects-content flex-lg-row-reverse">
              <a
                href="https://frolicking-souffle-e33725.netlify.app"
                title="Tic Tac Toe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <picture className="work-projects-content-picture">
                  <img src="/images/Tic Tac Toe.png" alt="Tic Tac Toe" />
                </picture>
              </a>

              <div className="work-projects-content-description align-items-lg-end">
                <a
                  href="https://frolicking-souffle-e33725.netlify.app"
                  title="Tic Tac Toe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tic Tac Toe
                </a>

                <a
                  href="https://github.com/Oanee/tic-tac-toe"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                  Github
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
