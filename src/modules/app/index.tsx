import { useRef } from "react";
import "./index.css";
import { icons } from "../../assets/images";
import { bcs, donate, dorud, naat, pad, quran } from "../../utils/data";

import ScrollAnimation from "../../utils/export";
import ScrollToTop from "react-scroll-to-top";
const LandingScreen = () => {
  const homeRef: any = useRef();
  const apkRef: any = useRef();
  const djangoRef: any = useRef();
  const reactRef:any=useRef();
  const contactRef:any=useRef()

  return (
    <div>
      <nav>
        <div className="container">
          <div className="logo">
            <h3>Portfolio</h3>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a
                  onClick={() =>
                    homeRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    apkRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {" "}
                  React Native
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    reactRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {" "}
                  React
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    djangoRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Django & DRF
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    contactRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="clr"></div>
        </div>
      </nav>

      <section id="banner" ref={homeRef}>
        <div className="container">
          <div className="row">
            <div className="banner-text">
              <h3>Hi,</h3>
              <h3>
                I'am <span style={{ color: "orange" }}>Farid</span>
              </h3>
              <h4>React ,React Native & Django with DRF Develeoper</h4>
              <p>
                3+ Years of Experience. Proficiency area's are
                Javascript,Typescript,Redux,rxjs,Python,Database
                Design,Firebase,RestApi(DRF),Google Map api.
              </p>
            </div>
            <div className="banner-text">
              <img src={icons.user} alt="user" />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" ref={apkRef}>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <div className="catagory">
            <h2>Android Applications</h2>
          </div>

          <div className="container">
            <div className="head">
              <a>
                <img src={icons.android} alt="android" />
                Quran word by word & tafsir
              </a>
            </div>

            <div className="gallery-item">
              <img src={icons.quran1} alt="car" />
              <h3>User Friendly Interface</h3>
              <h3>Realtime Push notification</h3>
            </div>
            <div className="gallery-item gallery-item-center">
              <img src={icons.quran2} alt="car" />
              <h3>Prayer time Reminder.</h3>
              <h3>Fully Offline Aceess </h3>
            </div>
            <div className="gallery-item">
              <img src={icons.quran3} alt="car" />
              <h3>24k+ downloads</h3>
              <h3>10k+ active users</h3>
            </div>
            <div
              className="gallery-item-des"
              style={{ backgroundColor: "#f8dedd" }}
            >
              <h3>Quran word by word & tafsir</h3>
              <textarea style={{ backgroundColor: "#f8dedd" }} value={quran} />
              <a
                href="https://play.google.com/store/apps/details?id=com.fislam.quran&hl=en&gl=US"
                target="_blank"
              >
                Play store Link
              </a>
            </div>
            <div className="clr"></div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight">
          <div className="container">
            <div className="head">
              <a>
                {" "}
                <img src={icons.android} alt="android" /> BCSFOR2DAY
              </a>
            </div>
            <div className="gallery-item-des">
              <h3>বিসিএসফরটুডে - BCS Preparation</h3>
              <textarea value={bcs} />
              <a
                href="https://play.google.com/store/apps/details?id=com.fislam.bcsfor2day&hl=en&gl=US"
                target="_blank"
              >
                Play store Link
              </a>
            </div>
            <div className="gallery-item">
              <img src={icons.bcs1} alt="car" />
              <h3>User Friendly Interface</h3>
              <h3>Realtime Push notification</h3>
            </div>
            <div className="gallery-item gallery-item-center">
              <img src={icons.bcs2} alt="car" />
              <h3>Social media integration.</h3>
              <h3>Simple registration and login</h3>
            </div>
            <div className="gallery-item">
              <img src={icons.bcs3} alt="car" />
              <h3>2k+ downloads</h3>
              <h3>300+ active users</h3>
            </div>

            <div className="clr"></div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <div className="container">
            <div className="head">
              <a>
                <img src={icons.android} alt="android" />
                Blood Link
              </a>
            </div>
            <div className="gallery-item">
              <img src={icons.do1} alt="car" />
              <h3>User Friendly Interface</h3>
              <h3>Realtime Push notification</h3>
            </div>
            <div className="gallery-item gallery-item-center">
              <img src={icons.do2} alt="car" />
              <h3>Prayer time Reminder.</h3>
              <h3>Fully Offline Aceess </h3>
            </div>
            <div className="gallery-item">
              <img src={icons.do3} alt="car" />
              <h3>100+ downloads</h3>
              <h3>10+ active users</h3>
            </div>
            <div
              className="gallery-item-des"
              style={{ backgroundColor: "#f6f6f6" }}
            >
              <h3>Blood Link</h3>
              <textarea style={{ backgroundColor: "#f6f6f6" }} value={donate} />
              <a
                href="https://play.google.com/store/apps/details?id=com.fislam.donate&hl=en&gl=US"
                target="_blank"
              >
                Play store Link
              </a>
            </div>
            <div className="clr"></div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight">
          <div className="container">
            <div className="head">
              <a>
                {" "}
                <img src={icons.android} alt="android" /> NaatLyric's including
                all Countries
              </a>
            </div>
            <div className="gallery-item-des">
              <h3>NaatLyric's including all Countries</h3>
              <textarea value={naat} />
              <a
                href="https://play.google.com/store/apps/details?id=com.fislam.naat&hl=en&gl=US"
                target="_blank"
              >
                Play store Link
              </a>
            </div>
            <div className="gallery-item">
              <img src={icons.nat1} alt="car" />
              <h3>User Friendly Interface</h3>
              <h3>Realtime Push notification</h3>
            </div>
            <div className="gallery-item gallery-item-center">
              <img src={icons.nat2} alt="car" />
              <h3>Social media integration.</h3>
              <h3>Most Famous Naat's alltogether</h3>
            </div>
            <div className="gallery-item">
              <img src={icons.nat3} alt="car" />
              <h3>1k+ downloads</h3>
              <h3>300+ active users</h3>
            </div>

            <div className="clr"></div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <div className="container">
            <div className="head">
              <a>
                <img src={icons.android} alt="android" />
                40 Dorud
              </a>
            </div>
            <div className="gallery-item">
              <img src={icons.dorud1} alt="car" />
              <h3>User Friendly Interface</h3>
              <h3>Realtime Push notification</h3>
            </div>
            <div className="gallery-item gallery-item-center">
              <img src={icons.dorud2} alt="car" />
              <h3>Audio Facility available.</h3>
              <h3>Fully Offline Aceess </h3>
            </div>
            <div className="gallery-item">
              <img src={icons.dorud3} alt="car" />
              <h3>500+ downloads</h3>
              <h3>300+ active users</h3>
            </div>
            <div
              className="gallery-item-des"
              style={{ backgroundColor: "#f3eed6" }}
            >
              <h3>40 Dorud</h3>
              <textarea style={{ backgroundColor: "#f3eed6" }} value={dorud} />
              <a
                href="https://play.google.com/store/apps/details?id=com.fislam.dorud&hl=en&gl=US"
                target="_blank"
              >
                Play store Link
              </a>
            </div>
            <div className="clr"></div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight">
          <div className="container">
            <div className="head">
              <a>
                {" "}
                <img src={icons.android} alt="android" /> NOTEpad copy and paste
              </a>
            </div>
            <div
              className="gallery-item-des"
              style={{ backgroundColor: "#ffd8ab" }}
            >
              <h3>NOTEpad copy and paste</h3>
              <textarea value={pad} style={{ backgroundColor: "#ffd8ab" }} />
              <a
                href="https://play.google.com/store/apps/details?id=com.fislam.note&hl=en&gl=US"
                target="_blank"
              >
                Play store Link
              </a>
            </div>
            <div className="gallery-item">
              <img src={icons.pad1} alt="car" />
              <h3>User Friendly Interface</h3>
              <h3>Realtime Push notification</h3>
            </div>
            <div className="gallery-item gallery-item-center">
              <img src={icons.pad3} alt="car" />
              <h3>Reminder for next activity</h3>
              <h3>Share accross friends</h3>
            </div>
            <div className="gallery-item">
              <img src={icons.pad2} alt="car" />
              <h3>100+ downloads</h3>
              <h3>30+ active users</h3>
            </div>

            <div className="clr"></div>
          </div>
        </ScrollAnimation>
      </section>
      <section id="react" ref={reactRef}>
        <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
          <div className="catagory">
            <h2>React Applications</h2>
          </div>

          <div className="container">
            <div className="head">
              <a>
                <img src={icons.android} alt="android" />
                Quran word by word & tafsir
              </a>
            </div>

            <div className="gallery-item">
              <img src={icons.quran1} alt="car" />
              <h3>User Friendly Interface</h3>
              <h3>Realtime Push notification</h3>
            </div>
            <div className="gallery-item gallery-item-center">
              <img src={icons.quran2} alt="car" />
              <h3>Prayer time Reminder.</h3>
              <h3>Fully Offline Aceess </h3>
            </div>
            <div className="gallery-item">
              <img src={icons.quran3} alt="car" />
              <h3>24k+ downloads</h3>
              <h3>10k+ active users</h3>
            </div>
            <div
              className="gallery-item-des"
              style={{ backgroundColor: "#f8dedd" }}
            >
              <h3>Quran word by word & tafsir</h3>
              <textarea style={{ backgroundColor: "#f8dedd" }} value={quran} />
              <a
                href="https://play.google.com/store/apps/details?id=com.fislam.quran&hl=en&gl=US"
                target="_blank"
              >
                Play store Link
              </a>
            </div>
            <div className="clr"></div>
          </div>
        </ScrollAnimation>
      </section>
      <section id="django" ref={djangoRef}>
        <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
          <div className="catagory">
            <h2>Django Applications</h2>
          </div>

          <div className="container">
            <div className="head">
              <a>
                <img src={icons.android} alt="android" />
                Quran word by word & tafsir
              </a>
            </div>

            <div className="gallery-item">
              <img src={icons.quran1} alt="car" />
              <h3>User Friendly Interface</h3>
              <h3>Realtime Push notification</h3>
            </div>
            <div className="gallery-item gallery-item-center">
              <img src={icons.quran2} alt="car" />
              <h3>Prayer time Reminder.</h3>
              <h3>Fully Offline Aceess </h3>
            </div>
            <div className="gallery-item">
              <img src={icons.quran3} alt="car" />
              <h3>24k+ downloads</h3>
              <h3>10k+ active users</h3>
            </div>
            <div
              className="gallery-item-des"
              style={{ backgroundColor: "#f8dedd" }}
            >
              <h3>Quran word by word & tafsir</h3>
              <textarea style={{ backgroundColor: "#f8dedd" }} value={quran} />
              <a
                href="https://play.google.com/store/apps/details?id=com.fislam.quran&hl=en&gl=US"
                target="_blank"
              >
                Play store Link
              </a>
            </div>
            <div className="clr"></div>
          </div>
        </ScrollAnimation>
      </section>

      <section id="footer">
        <div className="container"></div>
      </section>

      <section id="copyright" ref={contactRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-left">
                <p>
                  Copyright © 2020-{new Date().getFullYear()} <span>VillageCoder</span>{" "}
                  <a href="#">Privacy Policy</a>
                  <a href="#">FAQ</a>
                  <a href="#">Support</a>
                  <a target="_blank" href="www.linkedin.com/in/faridul-islam-6aa083b4">Linkedin</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyright-right text-end">
                <p>
                  Designed by <a href="#">VillageCoder</a> <span>Only on</span>{" "}
                  <a href="#">Envato Market</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop  smooth style={{borderRadius:'100%',boxShadow:'1px 2px 9px #241e1e'}}/>
    </div>
  );
};

export default LandingScreen;
