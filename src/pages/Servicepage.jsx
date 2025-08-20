import React from "react";

const Servicepage = () => {
  return (
    <div>
      <section className="project__area-two section-py-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section__title text-center mb-50">
                <span className="sub-title">OUR Services</span>
                <h2 className="title">
                  Comprehensive Legal Support Tailored to Your Needs
                </h2>
              </div>
            </div>
          </div>
          <div className="row gutter-y-30">
            {/* Paralegal */}
            <div className="col-lg-4 col-md-6">
              <div className="project__item-two">
                <div className="project__thumb-two">
                  <a href="paralegal.html">
                    <img
                      src="assets/img/project/h2_project_img01.jpg"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="project__content-two">
                  <h2 className="title">
                    <a href="paralegal.html">Paralegal</a>
                  </h2>
                  <span>
                    Supports attorneys with legal research, documentation, and
                    drafting to streamline the legal process.
                  </span>
                  <a href="paralegal.html">
                    <img
                      src="assets/img/icons/right_arrow.svg"
                      alt=""
                      className="injectable"
                    />
                  </a>
                </div>
                <div className="shape">
                  <img
                    src="assets/img/project/project_item_shape.svg"
                    alt="shape"
                  />
                </div>
              </div>
            </div>

            {/* Contract Life Cycle */}
            <div className="col-lg-8 col-md-6">
              <div className="project__item-two">
                <div className="project__thumb-two">
                  <a href="contract-life-cycle.html">
                    <img
                      src="assets/img/project/h2_project_img02.jpg"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="project__content-two">
                  <h2 className="title">
                    <a href="contract-life-cycle.html">Contract Life Cycle</a>
                  </h2>
                  <span>
                    End-to-end management of contracts from creation to <br />
                    execution, ensuring compliance and efficiency.
                  </span>
                  <a href="contract-life-cycle.html">
                    <img
                      src="assets/img/icons/right_arrow.svg"
                      alt=""
                      className="injectable"
                    />
                  </a>
                </div>
                <div className="shape">
                  <img
                    src="assets/img/project/project_item_shape.svg"
                    alt="shape"
                  />
                </div>
              </div>
            </div>

            {/* Document Review */}
            <div className="col-lg-6 col-md-6">
              <div className="project__item-two">
                <div className="project__thumb-two">
                  <a href="document-review.html">
                    <img
                      src="assets/img/project/h2_project_img03.jpg"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="project__content-two">
                  <h2 className="title">
                    <a href="document-review.html">Document Review</a>
                  </h2>
                  <span>
                    Detailed analysis and verification of legal documents to
                    identify risks, gaps, and required changes.
                  </span>
                  <a href="document-review.html">
                    <img
                      src="assets/img/icons/right_arrow.svg"
                      alt=""
                      className="injectable"
                    />
                  </a>
                </div>
                <div className="shape">
                  <img
                    src="assets/img/project/project_item_shape.svg"
                    alt="shape"
                  />
                </div>
              </div>
            </div>

            {/* Admin Supports */}
            <div className="col-lg-6 col-md-6">
              <div className="project__item-two">
                <div className="project__thumb-two">
                  <a href="admin-supports.html">
                    <img
                      src="assets/img/project/h2_project_img04.jpg"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="project__content-two">
                  <h2 className="title">
                    <a href="admin-supports.html">Admin Supports</a>
                  </h2>
                  <span>
                    Administrative assistance to legal teams including calendar
                    management, data entry, and reporting tasks.
                  </span>
                  <a href="admin-supports.html">
                    <img
                      src="assets/img/icons/right_arrow.svg"
                      alt=""
                      className="injectable"
                    />
                  </a>
                </div>
                <div className="shape">
                  <img
                    src="assets/img/project/project_item_shape.svg"
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicepage;
