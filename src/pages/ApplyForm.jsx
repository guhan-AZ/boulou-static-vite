 import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
    saveInfo: false,
    job_name: "N/A",
    price: "$0 - $0",
    price1: "0",
    price2: "0",
    validity: "N/A",
    location: "N/A",
    employment_type: "N/A",
    position: "N/A",
  });

  useEffect(() => {
    if (id) {
      const splitValues = id.split("-");

      const job_name = decodeURIComponent(splitValues[0] || "");
      const price1 = splitValues[1] || "0";
      const price2 = splitValues[2] || "0";
      const validity = splitValues[3] || "N/A";
      const location = decodeURIComponent(splitValues[4] || "");
      const employment_type = decodeURIComponent(splitValues[5] || "");
      const position = decodeURIComponent(splitValues[6] || "");

      setFormData((prev) => ({
        ...prev,
        job_name,
        price: `$${price1} - $${price2}`,
        price1,
        price2,
        validity,
        location,
        employment_type,
        position,
      }));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://bouloulpo.com/bouloulpo_admin/api/save_applay_from_header",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Name": formData.name,
            "X-Email": formData.email,
            "X-Phone": formData.phone,
            "X-JobName": formData.job_name,
            "X-Price1": formData.price1,
            "X-Price2": formData.price2,
            "X-EmploymentType": formData.employment_type,
            "X-Validity": formData.validity,
            "X-Location": formData.location,
            "X-Position": formData.position,
            "X-Comment": formData.comment,
            "X-Save-Info": formData.saveInfo.toString(),
          },
        }
      );

      const result = await response.json();
      if (result.success) {
        toast.success("Application submitted successfully!");

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong. Please try again later.", {
        position: "top-right",
        autoClose: 2000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer 
       autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        className="custom-toast-container"
        toastClassName="custom-toast"
        />
      <div className="container">
        <div className="breadcum-sub">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section__title text-center mb-40 sub-ban-title-card">
                  <h2 className="title">Career application</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="services__area section-py-130">
        <div className="container">
          <section className="p-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8">
                  <div className="contact__form-wrap">
                    <h2 className="title">Leave Us A Message</h2>

                    <form className="contact__form" onSubmit={handleSubmit}>
                      <div className="form-grp">
                        <label htmlFor="name">Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-grp">
                        <label htmlFor="email">Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-grp">
                        <label htmlFor="phone">Phone *</label>
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-grp">
                        <label htmlFor="price">Price</label>
                        <input
                          className="disabled-input"
                          id="price"
                          name="price"
                          type="text"
                          value={formData.price}
                          disabled
                        />
                      </div>
                      <div className="form-grp">
                        <label htmlFor="validity">Validity</label>
                        <input
                          className="disabled-input"
                          id="validity"
                          name="validity"
                          type="text"
                          value={formData.validity}
                          disabled
                        />
                      </div>
                      <input
                        type="hidden"
                        name="position"
                        value={formData.position}
                      />
                      <div className="form-grp">
                        <label htmlFor="location">Location</label>
                        <input
                          className="disabled-input"
                          id="location"
                          name="location"
                          type="text"
                          value={formData.location}
                          disabled
                        />
                      </div>
                      <div className="form-grp">
                        <label htmlFor="employment_type">Employment Type</label>
                        <input
                          className="disabled-input"
                          id="employment_type"
                          name="employment_type"
                          type="text"
                          value={formData.employment_type}
                          disabled
                        />
                      </div>
                      <div className="form-grp">
                        <label htmlFor="job_name">Job Name</label>
                        <input
                          className="disabled-input"
                          id="job_name"
                          name="job_name"
                          type="text"
                          value={formData.job_name}
                          disabled
                        />
                      </div>
                      <div className="form-grp">
                        <label htmlFor="comment">Comment *</label>
                        <textarea
                          name="comment"
                          id="comment"
                          value={formData.comment}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>

                      <div className="form-grp checkbox-grp">
                        <input
                          type="checkbox"
                          id="saveInfo"
                          name="saveInfo"
                          checked={formData.saveInfo}
                          onChange={handleChange}
                        />
                        <label htmlFor="saveInfo">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="tg-btn tg-btn-three"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Submitting...
                          </span>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </form>

                    <p className="ajax-response mb-0"></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Booking;
