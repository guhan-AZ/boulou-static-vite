import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CareerDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`https://bouloulpo.com/bouloulpo_admin/api/get_career_data1/${id}`)
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => {
        console.error("Error loading job details:", err);
      });
  }, [id]);

  if (!job) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <>
      <section className="career__details-area sub-ban-title-card mb-0 career_details_banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="career__details-content">
                 
                <h2 className="title">{job.job_name}</h2>
                <h3 className="salary">
                  ${job.price1} - ${job.price2} <span>USD/ Monthly</span>
                </h3>
                <ul className="list-wrap">
                  <li>
                    <span>Position</span> {job.job_name}
                  </li>
                  <li>
                    <span>Location</span> {job.location || "Not specified"}
                  </li>
                  <li>
                    <span>Employment Type</span> {job.employment_type || "Full-time"}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="apply__box">
                <span>Ready to apply? We can't wait to meet you!</span>

  <Link
  to={`/ApplyForm/${[
    job.job_name,
    job.price1,
    job.price2,
    job.validity,
    job.location,
    job.employment_type,
    job.position,
  ]
    .map((val) => encodeURIComponent(val))
    .join("-")}`}
  className="tg-btn tg-btn-three"
>
  Apply Now
</Link>

                <p>
                  Next, you'll face an assessment to proceed. Apply for one job
                  at a time and prepare well.
                </p>
                <p>
                  * By applying for this job listing, you agree to our Data{" "}
                  <a href="/contact">Privacy Policy ↗</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career__details-area-two section-py-130 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="career__details-content-two">
                <div
                  dangerouslySetInnerHTML={{ __html: job.job_description }}
                ></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="career__details-benefit">
                <h4 className="title">Benefit</h4>
                <ul className="list-wrap">
                  <li><img src="/assets/img/icons/benefit_icon01.svg" alt="" /> Competitive Salary</li>
                  <li><img src="/assets/img/icons/benefit_icon02.svg" alt="" /> Health Coverage</li>
                  <li><img src="/assets/img/icons/benefit_icon03.svg" alt="" /> Development Opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerDetails;
