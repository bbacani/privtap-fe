import React from 'react'
import './LandingPage.css'
import bro from "../LandingPage/images/bro.png"
import rafiki from "../LandingPage/images/rafiki.png"
import lastfiki from "../LandingPage/images/lastfiiki.png"
import security from "../LandingPage/images/Data_security_28.png"

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <div className="landing-page-container01">
                <div className="landing-page-container02">
                    <a href="/signup" className="landing-page-sign-up">Sign Up</a>
                    <span className="landing-page-login">
            <a href="/login" className="landing-page-log-in">Login</a>
            <br></br>
            <br></br>
          </span>
                </div>
            </div>
            <div className="landing-page-priv-t-a-p-the-first">
                <div className="landing-page-container03">
                    <h1 className="landing-page-text03">PrivTAP</h1>
                    <h1 className="landing-page-text04">
            <span>
              The first trigger action platform
              <span
                  dangerouslySetInnerHTML={{
                      __html: ' ',
                  }}
              />
            </span>
                        <br></br>
                        <span>that preserves Privacy</span>
                    </h1>
                    <span className="landing-page-text08">
            You control the entire flow of sensitive data while being able to
            use amazing automations!
          </span>
                    <a href="/signup">
                        <button  type="button" className="landing-page-button button">
                            Get Started Now!
                        </button>
                    </a>
                    <a href="/developers" className="developer">
                        I am a developer
                    </a>
                </div>
            </div>
            <div className="landing-page-features">
                <div className="landing-page-first-row">
                    <div className="landing-page-easy-to-use">
                        <div className="landing-page-container04">
                            <div className="landing-page-container05">
                <span className="landing-page-text09">
                  <span>Accessibility</span>
                  <br></br>
                </span>
                                <h1 className="landing-page-text12">Easy to use</h1>
                                <span className="landing-page-text13">
                  Our platform is designed to be optimized on Smartphone as well
                  as Desktop and Tablet. Everyone can use our platform to start
                  creating automations. The user experience is minimal in order
                  to be easy to learn.
                </span>
                                <li className="landing-page-li list-item">
                  <span className="landing-page-text14">
                    No programming skills required
                  </span>
                                </li>
                                <li className="landing-page-li1 list-item">
                  <span className="landing-page-text15">
                    UX designed to be easy for everyone
                  </span>
                                </li>
                                <li className="landing-page-li2 list-item">
                  <span className="landing-page-text16">
                    Access your automations from everywhere
                  </span>
                                </li>
                                <a href="/signup">
                                    <button type="button" className="landing-page-button1 button">
                                        Get Started Now!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="landing-page-image">
                        <div className="landing-page-container06">
                            <img
                                src={bro}
                                alt=""
                                className="landing-page-image1"
                            />
                        </div>
                    </div>
                </div>
                <div className="landing-page-second-row">
                    <div className="landing-page-image2">
                        <div className="landing-page-container07">
                            <img
                                src={rafiki}
                                alt=""
                                className="landing-page-image3"
                            />
                        </div>
                    </div>
                    <div className="landing-page-easy-to-use1">
                        <div className="landing-page-container08">
                            <div className="landing-page-container09">
                                <span className="landing-page-text17">Security</span>
                                <h1 className="landing-page-text18">
                                    Your privacy is in good hands
                                </h1>
                                <span className="landing-page-text19">
                  In our company Privacy is the most important value. We think
                  that the user has to be aware on the information flow and on
                  all the information that are shared from the trigger to the
                  action. At any moment, the user can view, change or delete
                  some privacy constraints regarding one or more automations.
                </span>
                                <li className="landing-page-li3 list-item">
                  <span className="landing-page-text20">
                    You can at any time change your privacy preferences
                  </span>
                                </li>
                                <li className="landing-page-li4 list-item">
                  <span className="landing-page-text21">
                    Know exactly the info shared with each party
                  </span>
                                </li>
                                <li className="landing-page-li5 list-item">
                  <span className="landing-page-text22">
                    We share only the minimal required information
                  </span>
                                </li>
                                <a href="/signup">
                                    <button type="button" className="landing-page-button2 button">
                                        Get Started Now!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing-page-third-row">
                    <div className="landing-page-easy-to-use2">
                        <div className="landing-page-container10">
                            <div className="landing-page-container11">
                                <span className="landing-page-text23">Powerful</span>
                                <h1 className="landing-page-text24">
                                    <span>The only limit is</span>
                                    <br></br>
                                    <span>your imagination</span>
                                </h1>
                                <span className="landing-page-text28">
                  With the large variety of triggers and actions, you can create
                  everythink you want. If you can think an automation, with
                  PrivTAP you can create it!
                </span>
                                <li className="landing-page-li6 list-item">
                  <span className="landing-page-text29">
                    Huge possible combinations of triggers and actions
                  </span>
                                </li>
                                <li className="landing-page-li7 list-item">
                  <span className="landing-page-text30">
                    Compatible with a lot of service providers
                  </span>
                                </li>
                                <li className="landing-page-li8 list-item">
                  <span className="landing-page-text31">
                    Customizable flow of information
                  </span>
                                </li>
                                <a href="/signup">
                                    <button type="button" className="landing-page-button3 button">
                                        Get Started Now!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="landing-page-image4">
                        <div className="landing-page-container12">
                            <img
                                src={lastfiki}
                                alt=""
                                className="landing-page-image5"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="landing-page-our-goal-is">
                <div className="landing-page-container13">
                    <img
                        src={security}
                        alt=""
                        className="landing-page-image6"
                    />
                </div>
                <div className="landing-page-container14">
                    <h1 className="landing-page-text32">
                        <span>Our goal is taking care</span>
                        <br></br>
                        <span>of your Privacy</span>
                    </h1>
                    <span className="landing-page-text36">
            You choose your privacy preferences when you create a new automation
            and if you change your mind, you can always modify them. All the
            control of your sensitive information is in your hands.
          </span>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
