import React from "react";
import constructionimg from "../../../../public/assets/img/special/Construction.jpg";
import constructionimg1 from "../../../../public/assets/img/newimage/Construction law.jpg";
import assets1 from "../../../../public/assets/1.png";
import assets3 from "../../../../public/assets/3.png";
import lpoinc from "../../../../public/assets/lpo/inc.png";
import topinc from "../../../../public/assets/lpo/top.png";
import cxxinc from "../../../../public/assets/lpo/cxx.jpg";
import right from "../../../../public/assets/img/icons/right_arrow.svg";
import h2_cta_shape from "../../../../public/assets/img/images/h2_cta_shape.svg";



const Construction = () => {
  return (
    <>
      <section className="hero-section-container">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content - col-8 */}
            <div className="col-lg-8 col-md-12 hero-text-content">
              <div className="legal-hero-badge">
                Expert Construction Law Paralegal Support
              </div>
              <h1 className="hero-title">Construction Law</h1>
              <p className="hero-description">
                Boulou LPO provides specialized paralegal assistance for
                construction law attorneys, ensuring contracts, claims, and
                dispute documentation are handled accurately and efficiently.
                From project agreements to lien filings, we help your firm
                manage the administrative and legal workload while attorneys
                focus on negotiations, litigation, and client strategy.
              </p>
            </div>

            {/* Right Image Section - col-4 */}
            <div className="col-lg-4 col-md-12 hero-image-content">
              <div className="hero-main-image">
                <img src={constructionimg1} alt="Lawyer" />
                {/* Floating Images */}
                <div className="hero-floating-img hero-img1">
                  <img src={assets1} alt="Assistant" />
                </div>
                <div className="hero-floating-img hero-img2">
                  <img src={assets3} alt="Attorney" />
                </div>
              </div>
              <p className="hero-caption">
                * At Boulou LPO, our paralegals provide comprehensive
                construction law assistance, including: *
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
                How We Can Transform Your Construction Law Practice{" "}
              </h2>
            </div>
            <div className="col-lg-6">
              <h6 style={{ color: "#002688" }}>
                Efficient Management of Construction Legal Matters
              </h6>
              <p className="transform-description text-muted">
                Construction law cases involve strict deadlines, detailed
                contracts, and coordination across multiple parties. Our team
                handles documentation, filings, and administrative tasks,
                allowing attorneys to focus on negotiations, dispute resolution,
                and client advocacy. This ensures cases progress efficiently and
                with reduced risk.
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
                      alt="Contract & Agreement Support"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">
                        Contract & Agreement Support
                      </h5>
                      <p>
                        From drafting construction contracts to reviewing
                        agreements with contractors, suppliers, and developers,
                        we ensure your projects are legally sound and risk-free.
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
                      alt="Resolving Disputes"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Resolving Disputes</h5>
                      <p>
                        We handle construction disputes involving delays,
                        defective work, contract breaches, and payment
                        issues—through negotiation, mediation, arbitration, or
                        litigation.
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
                      alt="Protecting Your Investments"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">
                        Protecting Your Investments
                      </h5>
                      <p>
                        Construction projects involve major investments. We
                        safeguard your financial and legal interests—covering
                        licensing, zoning, insurance, safety compliance, and
                        liability issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    Paralegals experienced in construction contracts, lien
                    claims, and dispute resolution.
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
                    clients, contractors, and stakeholders.
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
                    Knowledge of construction law, contracts, and regulatory
                    requirements.
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
                    Secure handling of sensitive client and project information.
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
                    Access professional support without the overhead of
                    additional in-house staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sub-page-baner pb-5" style={{ marginTop: "0px" }}>
        <div className="container">
          <section class="banner__area-five">
            <div class="container custom-container-five">
              <div
                class="banner__bg-foura"
                style={{
                  backgroundImage: "url(assets/lpo/h8_hero_bg.jpg) ",
                }}
              >
                <div
                  class="banner__bg-shape"
                  style={{
                    backgroundImage:
                      "url(assets/img/banner/h8_hero_bg_shape.svg)",
                  }}
                ></div>
                <div class="row">
                  <div class="col-xl-8 col-lg-8">
                    <div
                      class="banner__content-five"
                      style={{ padding: "30px" }}
                    >
                      <h2 class="title" data-aos="fade-up" data-aos-delay="400">
                        Impact Statement
                      </h2>
                      <h4>Reliable Support for Every Construction Matter</h4>
                      <p data-aos="fade-up" data-aos-delay="600">
                        Boulou LPO helps your construction law practice stay
                        organized, meet deadlines, and manage documentation with
                        precision. We provide attorneys the support needed to
                        deliver timely, professional service and achieve
                        favorable outcomes for clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section class="features__area-two section-py-130 pt-0">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-5 col-md-10 order-0 order-lg-2">
              <div class="features__img">
                <img src={constructionimg} alt="img" />
              </div>
            </div>
            <div class="col-lg-7 col-md-10  ">
              <div class="features__content-two">
                <div class="section__title mb-25">
                  <span class="sub-title">Types of Services We Offer </span>
                  <h2>Expert Construction Law Paralegal Support </h2>
                  <p>
                    At Boulou LPO, our paralegals provide comprehensive
                    construction law assistance, including:
                  </p>
                </div>

                <ul class="list-wrap about__list-item-two">
                  <li>
                    <div class="icon">
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
                          stroke-width="2.1875"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Drafting, reviewing, and organizing construction contracts,
                    agreements, and change orders
                  </li>
                  <li>
                    <div class="icon">
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
                          stroke-width="2.1875"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Preparing and filing mechanic’s liens, notices, and claims
                  </li>
                  <li>
                    <div class="icon">
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
                          stroke-width="2.1875"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Coordinating communications with clients, contractors, and
                    regulatory bodies
                  </li>
                  <li>
                    <div class="icon">
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
                          stroke-width="2.1875"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Managing case files, project documentation, and deadlines
                  </li>
                  <li>
                    <div class="icon">
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
                          stroke-width="2.1875"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Conducting legal research on construction law, regulations,
                    and dispute precedents
                  </li>
                  <li>
                    <div class="icon">
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
                          stroke-width="2.1875"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Assisting with dispute resolution, claims evaluation, and
                    litigation support
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
                    Call Now{" "}
                    <img
                      src={right}
                      alt=""
                      className="injectable"
                    />
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

export default Construction;
