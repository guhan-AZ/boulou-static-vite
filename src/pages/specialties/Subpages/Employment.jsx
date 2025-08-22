import React from "react";
import assets1 from "../../../../public/assets/1.png";
import assets3 from "../../../../public/assets/3.png";
import lpoinc from "../../../../public/assets/lpo/inc.png";
import topinc from "../../../../public/assets/lpo/top.png";
import cxxinc from "../../../../public/assets/lpo/cxx.jpg";
import h2_cta_shape from "../../../../public/assets/img/images/h2_cta_shape.svg";
import right from "../../../../public/assets/img/icons/right_arrow.svg";
import Employmentimg from "../../../../public/assets/img/special/Employment.jpg";
import Employmentlaw from "../../../../public/assets/lpo/Employment & Labor Law.png";

const Employment = () => {
  return (
    <>
      <section className="hero-section-container">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content - col-8 */}
            <div className="col-lg-8 col-md-12 hero-text-content">
              <div className="legal-hero-badge">
                Precise and Reliable Support
              </div>
              <h1 className="hero-title">Employment & Labor Law</h1>
              <p className="hero-description">
                Boulou LPO provides precise, reliable paralegal assistance to
                employment and labor law attorneys, helping manage workplace
                dispute cases, compliance matters, and contract reviews. We
                ensure your firm stays organized, meets deadlines, and maintains
                a smooth workflow while you focus on advising and representing
                clients.
              </p>
            </div>

            {/* Right Image Section - col-4 */}
            <div className="col-lg-4 col-md-12 hero-image-content">
              <div className="hero-main-image">
                <img src={Employmentlaw} alt="Employment Law" />
                {/* Floating Images */}
                <div className="hero-floating-img hero-img1">
                  <img src={assets1} alt="Assistant" />
                </div>
                <div className="hero-floating-img hero-img2">
                  <img src={assets3} alt="Attorney" />
                </div>
              </div>
              <p className="hero-caption">
                * At Boulou LPO, our paralegals provide comprehensive employment
                and labor law assistance, including:*
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="transform-section py-5">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <h2
                className="transform-title fw-bold mb-3"
                style={{ fontSize: "40px", color: "#002688" }}
              >
                How We Can Transform Your Employment & Labor Law Practice
              </h2>
            </div>
            <div className="col-lg-6">
              <h6 style={{ color: "#002688" }}>
                Efficient Support for Complex Workplace Matters
              </h6>
              <p className="transform-description text-muted">
                Employment and labor cases require careful documentation, strict
                adherence to compliance, and well-organized case management. Our
                team takes on the administrative and procedural work — from
                preparing filings to organizing case evidence — so your
                attorneys can focus on strategy, client relations, and
                successful resolution of disputes.
              </p>
            </div>

            {/* RIGHT: Image Cards */}
            <div className="col-lg-12">
              <div className="row g-4">
                {/* Card 1 */}
                <div className="col-12 col-sm-6">
                  <div className="transform-card">
                    <img
                      src={lpoinc}
                      className="transform-card-img"
                      alt="Streamlined Compliance"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Streamlined Compliance</h5>
                      <p>
                        We ensure accurate preparation and filing of EEOC
                        complaints and related legal documents to meet
                        regulatory requirements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-12 col-sm-6">
                  <div className="transform-card">
                    <img
                      src={topinc}
                      className="transform-card-img"
                      alt="Robust Case Preparation"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Robust Case Preparation</h5>
                      <p>
                        Our paralegals organize evidence, manage discovery, and
                        coordinate witness interviews to strengthen your cases.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 (full width below) */}
                <div className="col-12">
                  <div className="transform-card">
                    <img
                      src={cxxinc}
                      className="transform-card-img"
                      alt="Efficient Workflow"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Efficient Workflow</h5>
                      <p>
                        We handle contract drafting, legal research, and case
                        calendar management, allowing your firm to focus on
                        client advocacy and dispute resolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    Paralegals trained in employment agreements, workplace
                    investigations, and labor disputes.
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
                    clients, witnesses, and HR teams.
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
                    Knowledge of employment law procedures, EEOC filings, and
                    compliance requirements.
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
                    Secure handling of sensitive employee and company records.
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
                  <h3 className="title">Cost-Effective Partnership</h3>
                  <p>
                    Professional support without the expense of expanding your
                    in-house staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sub-page-baner pb-5" style={{ marginTop: "0px" }}>
        <div className="container">
          <section className="banner__area-five">
            <div className="container custom-container-five">
              <div
                className="banner__bg-foura"
                style={{
                  backgroundImage: "url(assets/lpo/h8_hero_bg.jpg) ",
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
                      <h2
                        className="title"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        Impact Statement
                      </h2>
                      <h4>Stronger Cases, Faster Resolutions</h4>
                      <p data-aos="fade-up" data-aos-delay="600">
                        With Boulou LPO as your support partner, your firm can
                        handle more employment and labor matters without
                        sacrificing quality or compliance. We provide the
                        behind-the-scenes organization, speed, and accuracy
                        needed to deliver better results for your clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="features__area-two section-py-130 pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-10 order-0 order-lg-2">
              <div className="features__img">
                <img src={Employmentimg} alt="img" />
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="features__content-two">
                <div className="section__title mb-25">
                  <span className="sub-title">Types of Services We Offer</span>
                  <h2>Expert Employment & Labor Law Paralegal Support</h2>
                  <p>
                    At Boulou LPO, our paralegals provide comprehensive
                    employment and labor law assistance, including:
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
                    Drafting employment contracts, non-compete agreements, and
                    policy manuals
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
                    Preparing and filing EEOC complaints and related legal
                    documents
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
                    Organizing evidence and documentation for workplace
                    investigations
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
                    Managing discovery and coordinating witness interviews
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
                    Conducting legal research on labor regulations and case
                    precedents
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
                    Maintaining case calendars and tracking critical deadlines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta__area-two section-py-130 pt-0">
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
                    Call Now <img src={right} alt="" className="injectable" />
                  </a>
                </div>
              </div>
            </div>
            <div className="cta__shape-three">
              <img src={h2_cta_shape} alt="shape" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Employment;
