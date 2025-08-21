import React from "react";

const Healthcare = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section-container">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-8 col-md-12 hero-text-content">
              <div className="legal-hero-badge">
                Personalized and Affordable Solutions
              </div>
              <h1 className="hero-title">Healthcare Law</h1>
              <p className="hero-description">
                Boulou LPO provides specialized paralegal assistance for
                healthcare law firms, ensuring contracts, filings, and
                regulatory documentation are handled accurately and efficiently.
                From case preparation to compliance support, we help attorneys
                focus on advising clients while managing essential
                administrative and legal tasks.
              </p>
              <button className="hero-remote-lawyers-btn">Book a Demo</button>
            </div>

            {/* Right Image */}
            <div className="col-lg-4 col-md-12 hero-image-content">
              <div className="hero-main-image">
                <img src="/assets/lpo/healthcare.png" alt="Healthcare Law" />
                {/* Floating Images */}
                <div className="hero-floating-img hero-img1">
                  <img src="/assets/1.png" alt="Assistant" />
                </div>
                <div className="hero-floating-img hero-img2">
                  <img src="/assets/3.png" alt="Attorney" />
                </div>
              </div>
              <p className="hero-caption">
                *A Boulou LPO is not U.S.-based or licensed, but is trained by
                U.S. attorneys and has experience working with U.S. law firms.*
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORM SECTION */}
      <section className="transform-section py-5">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <h2
                className="transform-title fw-bold mb-3"
                style={{ fontSize: "40px", color: "#002688" }}
              >
                How We Can Transform <br /> Your Healthcare Law Practice
              </h2>
            </div>
            <div className="col-lg-6">
              <h6 style={{ color: "#002688" }}>
                Efficient Support for Healthcare Legal Matters
              </h6>
              <p className="transform-description text-muted">
                Healthcare law requires meticulous documentation, regulatory
                awareness, and timely action. Our team handles filings, contract
                management, and compliance tracking so your attorneys can focus
                on advising clients, managing cases, and handling strategic
                legal matters. This improves efficiency, reduces risk, and keeps
                your practice organized.
              </p>
            </div>

            {/* Image Cards */}
            <div className="col-lg-12">
              <div className="row g-4">
                {/* Card 1 */}
                <div className="col-12 col-sm-6">
                  <div className="transform-card">
                    <img
                      src="assets/lpo/inc.png"
                      className="transform-card-img"
                      alt="Increase Profitability"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Increase Profitability</h5>
                      <p>
                        Boost your firm’s revenue with cost-effective legal
                        support that eliminates the expense of hiring full-time
                        staff.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-12 col-sm-6">
                  <div className="transform-card">
                    <img
                      src="assets/lpo/top.png"
                      className="transform-card-img"
                      alt="Access the Top 1%"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Access the Top 1%</h5>
                      <p>
                        Connect with elite healthcare attorneys worldwide and
                        gain expertise trusted by leading law practices.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-12">
                  <div className="transform-card">
                    <img
                      src="assets/lpo/cxx.jpg"
                      className="transform-card-img"
                      alt="Save Time"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Save Time</h5>
                      <p>
                        Our dedicated legal support team helps you eliminate
                        repetitive tasks and streamline compliance processes. By
                        handling documentation, research, and regulatory
                        requirements, we free up valuable hours so you can focus
                        on client outcomes and growing your practice with
                        confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATEMENT */}
      <div className="sub-page-baner pb-5" style={{ marginTop: "0px" }}>
        <div className="container">
          <section className="banner__area-five">
            <div className="container custom-container-five">
              <div
                className="banner__bg-foura"
                style={{
                  backgroundImage: "url(assets/lpo/h8_hero_bg.jpg)",
                }}
              >
                <div
                  className="banner__bg-shape"
                  style={{
                    backgroundImage:
                      "url(assets/img/banner/h8_hero_bg_shape.svg)",
                  }}
                ></div>
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <div
                      className="banner__content-five"
                      style={{ padding: "30px" }}
                    >
                      <h2 className="title">Impact Statement</h2>
                      <h4>
                        Reliable Support for Complex Healthcare Legal Matters
                      </h4>
                      <p>
                        Boulou LPO ensures your healthcare law practice operates
                        smoothly and efficiently. We help your firm maintain
                        accurate records, meet deadlines, and deliver
                        professional support — allowing your attorneys to focus
                        on client outcomes and legal strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <section className="features__area-three section-py-130 pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section__title text-center mb-40">
                <h2 className="title">Why Choose Boulou LPO?</h2>
              </div>
            </div>
          </div>
          <div className="row gutter-y-24 justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="features__item-two">
                <div className="features__icon-two">
                  <i className="flaticon-partner"></i>
                </div>
                <div className="features__content-four">
                  <h3 className="title">Skilled, Scalable Support</h3>
                  <p>
                    Paralegals experienced in healthcare contracts, regulatory
                    filings, and legal documentation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="features__item-two">
                <div className="features__icon-two">
                  <i className="flaticon-health-insurance"></i>
                </div>
                <div className="features__content-four">
                  <h3 className="title">Bilingual Capabilities</h3>
                  <p>
                    Clear communication with English and Spanish-speaking
                    clients, providers, and agencies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="features__item-two">
                <div className="features__icon-two">
                  <i className="flaticon-tax"></i>
                </div>
                <div className="features__content-four">
                  <h3 className="title">Industry-Focused Expertise</h3>
                  <p>
                    Knowledge of healthcare laws, licensing requirements, and
                    compliance processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="features__item-two">
                <div className="features__icon-two">
                  <i className="flaticon-report"></i>
                </div>
                <div className="features__content-four">
                  <h3 className="title">Confidential & Compliant</h3>
                  <p>Secure handling of sensitive client and medical data.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="features__item-two">
                <div className="features__icon-two">
                  <i className="flaticon-calculator"></i>
                </div>
                <div className="features__content-four">
                  <h3 className="title">Cost-Effective Partnership</h3>
                  <p>
                    Professional support without the overhead of in-house staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF SERVICES */}
      <section className="features__area-two section-py-130 pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-10 order-0 order-lg-2">
              <div className="features__img">
                <img src="assets/img/special/Healthcare.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="features__content-two">
                <div className="section__title mb-25">
                  <span className="sub-title">Types of Services We Offer</span>
                  <h2>Expert Healthcare Law Paralegal Support</h2>
                  <p>
                    At Boulou LPO, our paralegals provide comprehensive
                    healthcare law assistance, including:
                  </p>
                </div>
                <ul className="list-wrap about__list-item-two">
                  <li>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                      >
                        <path
                          d="M12.091 2L5.091 9L1.90918 5.81818"
                          stroke="currentColor"
                          strokeWidth="2.1875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Drafting and reviewing contracts, agreements, and policies
                  </li>
                  <li>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                      >
                        <path
                          d="M12.091 2L5.091 9L1.90918 5.81818"
                          stroke="currentColor"
                          strokeWidth="2.1875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Preparing and filing regulatory submissions and reports
                  </li>
                  <li>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                      >
                        <path
                          d="M12.091 2L5.091 9L1.90918 5.81818"
                          stroke="currentColor"
                          strokeWidth="2.1875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Organizing and maintaining medical/legal documentation
                  </li>
                  <li>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                      >
                        <path
                          d="M12.091 2L5.091 9L1.90918 5.81818"
                          stroke="currentColor"
                          strokeWidth="2.1875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Conducting legal research on healthcare regulations,
                    licensing, and case law
                  </li>
                  <li>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                      >
                        <path
                          d="M12.091 2L5.091 9L1.90918 5.81818"
                          stroke="currentColor"
                          strokeWidth="2.1875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Coordinating communications with clients, providers, and
                    agencies
                  </li>
                  <li>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                      >
                        <path
                          d="M12.091 2L5.091 9L1.90918 5.81818"
                          stroke="currentColor"
                          strokeWidth="2.1875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Managing deadlines, audits, and compliance tracking.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta__area-two section-py-130 pt-5">
        <div className="container">
          <div className="cta__inner-wrap-two">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="cta__content-three">
                  <h2 className="title">
                    Click to get a free Consultation Now
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cta__content-right">
                  <div className="cta__contact">
                    <div className="icon">
                      <i className="flaticon-telephone"></i>
                    </div>
                    <div className="content">
                      <a href="tel:1 (561) 409-5858">1 (561) 409-5858</a>
                    </div>
                  </div>
                  <a
                    href="tel:1 (561) 409-5858"
                    className="tg-btn tg-border-btn "
                  >
                    Call Now{" "}
                    <img
                      src="assets/img/icons/right_arrow.svg"
                      alt=""
                      className="injectable"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="cta__shape-three">
              <img src="assets/img/images/h2_cta_shape.svg" alt="shape" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Healthcare;
