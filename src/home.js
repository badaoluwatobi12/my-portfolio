import React from "react";
import "./home.scss";
import logo from ".//img/logo.jpg";
import back from ".//img/back.jpg";
import tobi from ".//img/tobi.png";

export default function home() {
  return (
    <>
      <div className="container">
        {/* ///////header */}

        <div className="header">
          <div className="firstlink">
            <a href="#" alt className="link">
              Work
            </a>
            <a href="#" alt className="link">
              About
            </a>
          </div>

          <div className="boxLogo">
            <img src={logo} alt="" className="logo" />
          </div>

          <div className="secondlink">
            <a href="#" alt className="link">
              Contact
            </a>
            <a href="#" alt className="link">
              CV
            </a>
          </div>
        </div>

        {/* ///////////sidebar */}
        <section className="sidebar">
          <img src={tobi} alt="" className="img" />

          <div className="skillBox">
            <h1 className="skill">skill</h1>
            <span className="skillh">adobe</span>
            <div className="gradingBack">
              <div className="gradingFront--1">30%</div>
            </div>
            <span className="skillh">corel draw</span>
            <div className="gradingBack">
              <div className="gradingFront--2">40%</div>
            </div>
            <span className="skillh">Html/css</span>
            <div className="gradingBack">
              <div className="gradingFront--3">100%</div>
            </div>
          </div>
          <div className="languageBox">
            <h1 className="language">language</h1>
            <span className="skillh">English</span>
            <div className="gradingBack">
              <div className="gradingFront--4">50%</div>
            </div>
            <span className="skillh">yoruba</span>
            <div className="gradingBack">
              <div className="gradingFront--5">100%</div>
            </div>
            <span className="skillh">german</span>
            <div className="gradingBack">
              <div className="gradingFront--6">10%</div>
            </div>
          </div>
        </section>

        {/* /////////////feature */}
        <section className="features">
          <h1 className="feature__head--a">Work Experience</h1>
          <h2 className="feature__head--b">Front-End-Developer</h2>
          <h2 className="feature">
            I am Junior Web developer able to build a Web presence from the
            ground up - from concept, navigation, layout and programming to UX
            and SEO. Skilled at writing well-designed, testable and efficient
            code using current best practices in Web development. Fast learner,
            hard worker and team player who is proficient in an array of
            scripting languages and multimedia Web tools.
          </h2>
          <div className="feature__icon">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-whatsapp"></i>
          </div>
        </section>

        {/* /////////card */}
        <section className="card">
          <h1 className="feature__head--a">Projects</h1>
          <div className="cardShell">
            <div className="cardShell__cards">
              <img src={back} alt="" className="cardShell__cardPics" />
              <h1 className="cardShell__cardText">
                <a href="#" className="check">
                  check
                </a>
                First Project
              </h1>
            </div>
            <div className="cardShell__cards">
              <img src={back} alt="" className="cardShell__cardPics" />
              <h1 className="cardShell__cardText">
                <a href="#" className="check">
                  check
                </a>
                Second Project
              </h1>
            </div>
            <div className="cardShell__cards">
              <img src={back} alt="" className="cardShell__cardPics" />
              <h1 className="cardShell__cardText">
                <a href="#" className="check">
                  check
                </a>
                Third Project
              </h1>
            </div>
            <div className="cardShell__cards">
              <img src={back} alt="" className="cardShell__cardPics" />
              <h1 className="cardShell__cardText">
                <a href="#" className="check">
                  check
                </a>
                Fourth Project
              </h1>
            </div>
            <div className="cardShell__cards">
              <img src={back} alt="" className="cardShell__cardPics" />
              <h1 className="cardShell__cardText">
                <a href="#" className="check">
                  check
                </a>
                Fifth Project
              </h1>
            </div>
            <div className="cardShell__cards">
              <img src={back} alt="" className="cardShell__cardPics" />
              <h1 className="cardShell__cardText">
                <a href="#" className="check">
                  check
                </a>
                Sixth Project
              </h1>
            </div>
          </div>
        </section>

        {/* //////////footer */}
        <footer className="footer">
          <h1 className="feature__head--a">Contact</h1>
          <div className="">
            <div className="popup__shell">
              <form action="#" className="popform">
                <div className="popform__group">
                  {/* <label for="email" className="popform__label">
                    Email
                  </label> */}
                  <input
                    type="text"
                    name="email"
                    className="popform__input--1"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="popform__group">
                  <textarea
                    name="text"
                    className="popform__input--2"
                    placeholder="Send Me Message"
                    required
                  ></textarea>
                </div>

                <div className="popform__group">
                  <a href="#" class="button">
                    Send &rarr;
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="footerShell2">
            <h5 className="feature__head--c">
              &copy; 2023 ALL RIGHTS RESERVED
            </h5>
            <h3 className="feature__head--c">DEVELOPED BY BADA</h3>
          </div>
        </footer>
      </div>
    </>
  );
}
