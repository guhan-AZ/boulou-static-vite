import React from "react";

const Civil = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section-container">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-8 col-md-12 hero-text-content">
              <div className="legal-hero-badge">
                Reliable & Efficient Litigation Support
              </div>
              <h1 className="hero-title">Civil Litigation</h1>
              <p className="hero-description">
                Boulou LPO provides skilled paralegal assistance for civil
                litigation attorneys, ensuring case management, filings, and
                discovery are handled with precision and efficiency. From
                pleadings to trial preparation, we help your firm stay
                organized, meet deadlines, and achieve favorable client
                outcomes.
              </p>
              <button className="hero-remote-lawyers-btn">Book a Demo</button>
            </div>

            {/* Right Image */}
            <div className="col-lg-4 col-md-12 hero-image-content">
              <div className="hero-main-image">
                <img src="/assets/lpo/Civil Litigation.png" alt="Civil Litigation" />
                {/* Floating Images */}
                <div className="hero-floating-img hero-img1">
                  <img src="/assets/1.png" alt="Assistant" />
                </div>
                <div className="hero-floating-img hero-img2">
                  <img src="/assets/3.png" alt="Attorney" />
                </div>
              </div>
              <p className="hero-caption">
                *Boulou LPO is not U.S.-based or licensed, but is trained by U.S.
                attorneys and has extensive experience supporting U.S. law
                firms.*
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Section */}
      <section className="transform-section py-5">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <h2
                className="transform-title fw-bold mb-3"
                style={{ fontSize: "40px", color: "#002688" }}
              >
                How We Can Transform <br /> Your Civil Litigation Practice
              </h2>
            </div>
            <div className="col-lg-6">
              <h6 style={{ color: "#002688" }}>
                Streamlined Support for Every Stage of Litigation
              </h6>
              <p className="transform-description text-muted">
                Civil litigation demands detailed documentation, strict
                deadlines, and careful preparation. Our paralegal team handles
                filings, discovery, and trial prep so attorneys can focus on
                client advocacy and courtroom strategy.
              </p>
            </div>

            {/* Transformation Cards */}
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
                        Reduce overhead by leveraging cost-effective legal
                        support that eliminates the need for full-time in-house
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
                      alt="Access Top Talent"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Access Top Talent</h5>
                      <p>
                        Partner with highly trained litigation paralegals
                        experienced in complex case management and trial
                        preparation.
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
                        We handle filings, discovery, and trial binders so you
                        can focus on strategy and client advocacy — not
                        repetitive administrative tasks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
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
                  <h3 className="title">Litigation Expertise</h3>
                  <p>
                    Experienced in pleadings, motions, discovery, and trial
                    preparation for civil litigation matters.
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
                  <h3 className="title">Efficient Case Management</h3>
                  <p>
                    Organized support for filings, deadlines, evidence, and
                    court communications.
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
                  <h3 className="title">Tailored Support</h3>
                  <p>
                    Services customized to your firm’s unique litigation
                    workflow and needs.
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
                  <p>
                    Secure handling of sensitive case documents and client
                    information.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="features__item-two">
                <div className="features__icon-two">
                  <i className="flaticon-calculator"></i>
                </div>
                <div className="features__content-four">
                  <h3 className="title">Cost-Effective</h3>
                  <p>
                    High-quality litigation support without the overhead of
                    in-house staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Banner */}
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
                    <div className="banner__content-five" style={{ padding: "30px" }}>
                      <h2 className="title">Impact Statement</h2>
                      <h4>Dependable Support for Civil Litigation Matters</h4>
                      <p>
                        Boulou LPO helps your litigation practice run smoothly by
                        managing filings, discovery, and trial preparation with
                        accuracy — allowing attorneys to focus on strategy,
                        negotiations, and courtroom advocacy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Services Offered */}
      <section className="features__area-two section-py-130 ">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-10 order-0 order-lg-2">
              <div className="features__img">
                <img src="assets/img/special/Civil.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="features__content-two">
                <div className="section__title mb-25">
                  <span className="sub-title">Types of Services We Offer</span>
                  <h2>Expert Civil Litigation Paralegal Support</h2>
                  <p>
                    Our team provides end-to-end litigation assistance,
                    including:
                  </p>
                </div>
                <ul className="list-wrap about__list-item-two">
                  {[
                    "Drafting and filing complaints, motions, and discovery requests",
                    "Organizing and managing case files and exhibits",
                    "Coordinating depositions, witnesses, and court schedules",
                    "Conducting legal research on statutes, precedents, and case law",
                    "Preparing trial binders, exhibits, and evidence summaries",
                    "Managing litigation calendars, deadlines, and document production",
                  ].map((item, idx) => (
                    <li key={idx}>
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta__area-two section-py-130 pt-5">
        <div className="container">
          <div className="cta__inner-wrap-two">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="cta__content-three">
                  <h2 className="title">Click to get a free Consultation Now</h2>
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

export default Civil;
