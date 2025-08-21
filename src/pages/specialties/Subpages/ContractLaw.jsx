import React from "react";
import contracts from "../../../../public/assets/lpo/Contract Law.png";

const ContractLaw = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section-container">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-8 col-md-12 hero-text-content">
              <div className="legal-hero-badge">
                Paralegals Provide Comprehensive Contract Law Assistance
              </div>
              <h1 className="hero-title">Contract Law</h1>
              <p className="hero-description">
                Boulou LPO provides specialized paralegal assistance for
                contract law attorneys and firms, ensuring contracts are
                drafted, reviewed, and managed with accuracy and efficiency.
                From negotiation support to compliance tracking, we help your
                team streamline the contract lifecycle and reduce risk for
                clients.
              </p>
              <button className="hero-remote-lawyers-btn">Book a Demo</button>
            </div>

            {/* Right Image */}
            <div className="col-lg-4 col-md-12 hero-image-content">
              <div className="hero-main-image">
                <img src={contracts} alt="Contract Law" />
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
                How We Can Transform <br /> Your Contract Law Practice
              </h2>
            </div>
            <div className="col-lg-6">
              <h6 style={{ color: "#002688" }}>
                Streamlined Contract Management for Accuracy and Compliance
              </h6>
              <p className="transform-description text-muted">
                Contract law demands attention to detail, timely reviews, and
                strict adherence to legal obligations. Our team handles document
                preparation, organization, and monitoring, allowing attorneys to
                focus on negotiations, strategy, and client counseling. This
                reduces risk, prevents missed deadlines, and ensures contracts
                support favorable outcomes.
              </p>
            </div>

            {/* Cards */}
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
                        Boost your firm’s revenue with cost-effective contract
                        support while avoiding full-time hiring costs.
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
                        Collaborate with elite contract law specialists trusted
                        by leading practices worldwide.
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
                        Our paralegal team reduces repetitive contract tasks,
                        organizes compliance, and frees up valuable hours for
                        your attorneys to focus on clients and growth.
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
                      <h4>Reliable Support for Every Contract Matter</h4>
                      <p>
                        Boulou LPO provides the precision, organization, and
                        compliance support your firm needs to manage contracts
                        efficiently. With our help, attorneys can handle more
                        agreements confidently, mitigate risk, and deliver
                        consistent value to clients.
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
      <section class="features__area-three section-py-130 pt-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section__title text-center mb-40">
                <h2 class="title">Why Choose Boulou LPO?</h2>
              </div>
            </div>
          </div>
          <div class="row gutter-y-24 justify-content-center">
            <div class="col-lg-4 col-sm-6">
              <div class="features__item-two">
                <div class="features__icon-two">
                  <i class="flaticon-partner"></i>
                </div>
                <div class="features__content-four">
                  <h3 class="title">Skilled, Scalable Support</h3>
                  <p>
                    Paralegals experienced in drafting, reviewing, and managing
                    various contracts.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="features__item-two">
                <div class="features__icon-two">
                  <i class="flaticon-health-insurance"></i>
                </div>
                <div class="features__content-four">
                  <h3 class="title">Bilingual Capabilities</h3>
                  <p>
                    Clear communication with English and Spanish-speaking
                    clients, partners, and vendors.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="features__item-two">
                <div class="features__icon-two">
                  <i class="flaticon-tax"></i>
                </div>
                <div class="features__content-four">
                  <h3 class="title">Industry-Focused Expertise</h3>
                  <p>
                    Knowledge of contract law principles, compliance, and
                    enforcement procedures.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-sm-6">
              <div class="features__item-two">
                <div class="features__icon-two">
                  <i class="flaticon-report"></i>
                </div>
                <div class="features__content-four">
                  <h3 class="title">Confidential & Compliant</h3>
                  <p>
                    Secure handling of sensitive agreements and legal documents.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="features__item-two">
                <div class="features__icon-two">
                  <i class="flaticon-calculator"></i>
                </div>
                <div class="features__content-four">
                  <h3 class="title">Cost-Effective Partnership</h3>
                  <p>
                    Expand contract management capabilities without the overhead
                    of in-house hires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="features__area-two section-py-130 pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-10 order-0 order-lg-2">
              <div className="features__img">
                <img src="assets/img/special/Contract.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="features__content-two">
                <div className="section__title mb-25">
                  <span className="sub-title">Types of Services We Offer</span>
                  <h2>Expert Contract Law Paralegal Support</h2>
                  <p>
                    At Boulou LPO, our paralegals provide comprehensive contract
                    law assistance, including:
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
                    Drafting, reviewing, and revising contracts & agreements
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
                    Preparing non-disclosure, partnership, and service
                    agreements
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
                    Organizing and maintaining contract records & databases
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
                    Tracking contract deadlines, renewals, and compliance
                    obligations{" "}
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
                    Coordinating communications with clients, vendors, and
                    parties
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
                    Conducting legal research on contractual obligations and
                    precedents
                  </li>
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
                    className="tg-btn tg-border-btn"
                  >
                    Call Now{" "}
                    <img
                      src="assets/img/icons/right_arrow.svg"
                      alt="arrow"
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

export default ContractLaw;
