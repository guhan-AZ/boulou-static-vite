import React from "react";

const Family = () => {
  return (
    <>
      <section className="hero-section-container">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content - col-8 */}
            <div className="col-lg-8 col-md-12 hero-text-content">
              <div className="legal-hero-badge">
                Personalized and Affordable Solutions
              </div>
              <h1 className="hero-title">Family Law</h1>
              <p className="hero-description">
                Boulou LPO provides compassionate, detail-oriented paralegal
                assistance to family law attorneys and firms. We help manage
                sensitive cases with professionalism and discretion, ensuring
                all documents, filings, and communications are handled
                efficiently so you can focus on guiding clients through life’s
                most personal legal matters.
              </p>
            </div>

            {/* Right Image Section - col-4 */}
            <div className="col-lg-4 col-md-12 hero-image-content">
              <div className="hero-main-image">
                <img src="/assets/lpo/administration-law.png" alt="Lawyer" />
                {/* Floating Images */}
                <div className="hero-floating-img hero-img1">
                  <img src="/assets/1.png" alt="Assistant" />
                </div>
                <div className="hero-floating-img hero-img2">
                  <img src="/assets/3.png" alt="Attorney" />
                </div>
              </div>
              <p className="hero-caption">
                * At Boulou LPO, our paralegals provide comprehensive family law
                assistance, including: *
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
                How We Can Transform Your Family Law Practice{" "}
              </h2>
            </div>
            <div className="col-lg-6">
              <h6 style={{ color: "#002688" }}>
                Sharper Preparation, Stronger Defense
              </h6>
              <p className="transform-description text-muted">
                In criminal defense, every detail matters — and missing one can
                change the outcome of a case. Our team ensures that evidence is
                properly managed, filings are timely, and all procedural
                requirements are met. With us handling the backend, your
                attorneys can devote more time to strategy, client advocacy, and
                courtroom performance, resulting in stronger defenses and better
                client outcomes.
              </p>
            </div>

            {/* RIGHT: Image Cards */}
            <div className="col-lg-12">
              <div className="row g-4">
                {/* Card 1 */}
                <div className="col-12 col-sm-6">
                  <div className="transform-card">
                    <img
                      src="assets/lpo/inc.png"
                      className="transform-card-img"
                      alt="Strong Defense Strategy"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Strong Defense Strategy</h5>
                      <p>
                        We build powerful defense strategies to protect your
                        rights and freedom, ensuring every angle of your case is
                        examined with precision and skill.
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
                      alt="Protecting Your Rights"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Protecting Your Rights</h5>
                      <p>
                        From misdemeanor charges to serious felonies, our
                        attorneys stand by your side—safeguarding your
                        constitutional rights and challenging unfair evidence or
                        procedures.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 (full width below) */}
                <div className="col-12">
                  <div className="transform-card">
                    <img
                      src="assets/lpo/cxx.jpg"
                      className="transform-card-img"
                      alt="Guidance Through Every Step"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">
                        Guidance Through Every Step
                      </h5>
                      <p>
                        Facing criminal charges is overwhelming. We provide
                        clear guidance, aggressive courtroom representation, and
                        dedicated support to help you move forward with
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

      <section class="features__area-three section-py-130 pt-0">
        <div class="container">
          <div class="row gutter-y-24 justify-content-center">
            <div class="col-lg-6 col-sm-6">
              <div class="features__item-two">
                <div class="features__content-four">
                  <div className="section__title   ">
                    <h3>How We Can Transform Your Family Law Practice</h3>
                    <h5 className="mt-3">
                      <i>Organized Support for Sensitive Matters </i>{" "}
                    </h5>
                    <p>
                      Family law cases demand a balance of efficiency, empathy,
                      and accuracy. Our team ensures all required documents are
                      complete, deadlines are met, and case files are organized
                      for quick access. By taking on these essential
                      administrative and legal support tasks, we free your
                      attorneys to focus on providing counsel, negotiation, and
                      courtroom representation — all while maintaining a high
                      standard of client care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="features__item-two">
                <div class="features__content-four">
                  <div className="section__title   ">
                    <h3>Impact Statement</h3>
                    <h5 className="mt-3">
                      {" "}
                      <i>Trusted Support When It Matters Most </i>{" "}
                    </h5>
                    <p>
                      With Boulou LPO as your partner, you can confidently
                      handle more cases without sacrificing quality or
                      compassion. We help your firm run smoothly, keep clients
                      informed, and meet every deadline, making us a reliable
                      extension of your family law team.
                    </p>
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
                    Paralegals experienced in divorce, custody, adoption, and
                    other family law matters.
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
                    clients during emotionally charged cases.
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
                    Understanding of family law procedures, deadlines, and court
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
                  <p>Secure handling of highly sensitive client information.</p>
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
                    Professional support without the expense of in-house
                    staffing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="features__area-two section-py-130 pt-0">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-5 col-md-10 order-0 order-lg-2">
              <div class="features__img">
                <img src="assets/img/special/Family.jpg" alt="img" />
              </div>
            </div>
            <div class="col-lg-7 col-md-10  ">
              <div class="features__content-two">
                <div class="section__title mb-25">
                  <span class="sub-title">Types of Services We Offer </span>
                  <h2>Expert Family Law Paralegal Support</h2>
                  <p>
                    At Boulou LPO, our paralegals provide comprehensive family
                    law assistance, including:
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
                    Preparing and filing petitions, responses, and court motions
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
                    Drafting parenting plans, settlement agreements, and
                    financial disclosures
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
                    Organizing and indexing case files for court hearings and
                    mediation
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
                    Coordinating client meetings and court appearances
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
                    Managing deadlines and court calendars
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
                    Conducting legal research on statutes and case law relevant
                    to family matters
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

export default Family;
