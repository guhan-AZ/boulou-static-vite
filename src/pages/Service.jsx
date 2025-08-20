import React from 'react';
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <div className="container">
        <div className="breadcum-sub">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section__title text-center mb-40 sub-ban-title-card">
                  <h2 className="title">Services</h2>
                  <p>
                  Comprehensive Legal Support Tailored to Your Needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
       <section className="project__area-two section-py-130">
        <div className="container">
          
          <div className="row gutter-y-30">
            {/* Paralegal */}
            <div className="col-lg-4 col-md-6">
              <div className="project__item-two">
                <div className="project__thumb-two">
                  <Link to="/paralegal-service">
                    <img
                      src="assets/img/project/h2_project_img01.jpg"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="project__content-two">
                  <h2 className="title">
                    <Link to="/paralegal-service">Paralegal</Link>
                  </h2>
                  <span>
                    Supports attorneys with legal research, documentation, and
                    drafting to streamline the legal process.
                  </span>
                  <Link to="/paralegal-service">
                    <img
                      src="assets/img/icons/right_arrow.svg"
                      alt=""
                      className="injectable"
                    />
                  </Link>
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
                  <Link to="/contract-life-cycle-management">
                    <img
                      src="assets/img/project/h2_project_img02.jpg"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="project__content-two">
                  <h2 className="title">
                    <Link to="/contract-life-cycle-management">Contract Life Cycle</Link>
                  </h2>
                  <span>
                    End-to-end management of contracts from creation to <br />
                    execution, ensuring compliance and efficiency.
                  </span>
                  <Link to="/contract-life-cycle-management">
                    <img
                      src="assets/img/icons/right_arrow.svg"
                      alt=""
                      className="injectable"
                    />
                  </Link>
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
                  <Link to="/document-review">
                    <img
                      src="assets/img/project/h2_project_img03.jpg"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="project__content-two">
                  <h2 className="title">
                    <Link to="/document-review">Document Review</Link>
                  </h2>
                  <span>
                    Detailed analysis and verification of legal documents to
                    identify risks, gaps, and required changes.
                  </span>
                  <Link to="/document-review">
                    <img
                      src="assets/img/icons/right_arrow.svg"
                      alt=""
                      className="injectable"
                    />
                  </Link>
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
                  <Link to="/admin-supports">
                    <img
                      src="assets/img/project/h2_project_img04.jpg"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="project__content-two">
                  <h2 className="title">
                    <Link to="/admin-supports">Admin Supports</Link>
                  </h2>
                  <span>
                    Administrative assistance to legal teams including calendar
                    management, data entry, and reporting tasks.
                  </span>
                  <Link to="/admin-supports">
                    <img
                      src="assets/img/icons/right_arrow.svg"
                      alt=""
                      className="injectable"
                    />
                  </Link>
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

export default Service;
