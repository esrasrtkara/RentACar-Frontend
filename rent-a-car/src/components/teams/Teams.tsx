import './Teams.css';

type Props = {};

const Teams = (props: Props) => {
  return (
    <>
      <section className="page-section" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Autopia Team</h2>
            <h3 className="section-subheading text-muted">Java - React 1-B</h3>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="https://avatars.githubusercontent.com/u/111640113?v=4"
                  alt="..."
                />
                <h4>Abdulkadir Aydemir</h4>
                <p className="text-muted">Full Stack Developer</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://github.com/AbdulkadirAydemir"
                  target="_balank"
                  aria-label="Abdulkadir Aydemir Github Profile">
                  <i className="fab fa-github" />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://twitter.com/kadir_aydemirr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abdulkadir Aydemir Twitter Profile">
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://www.linkedin.com/in/abdulkadir-aydemir-571788243/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abdulkadir Aydemir LinkedIn Profile">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="https://avatars.githubusercontent.com/u/56135111?v=4"
                  alt="..."
                />
                <h4>Esra Akbulut</h4>
                <p className="text-muted">Full Stack Developer</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://github.com/esrasrtkara"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Esra Akbulut Github Profile">
                  <i className="fab fa-github" />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Esra Akbulut Facebook Profile">
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://www.linkedin.com/in/esra-akbulut-123463160/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Esra Akbulut LinkedIn Profile">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                AUTOPIA RENT A CAR PROJESİ <br /> İSTANBUL KODLUYOR PROGRAMI
                KAPSAMINDA <br /> HAZIRLANMIŞTIR
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
