import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://bouloulpo.com/bouloulpo_admin/api/get_data8")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setBlogs(res.data);
        } else {
          console.warn("Unexpected API response:", res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API fetch error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
     <Helmet>
        <title>Blogs | Paralegal, CLM & Admin Experts | Bouloulpo</title>
        <meta name="description" content="Discover expert articles on legal outsourcing, CLM strategies, paralegal tips, and admin support. Stay informed and optimize your law firm’s efficiency with Bouloulpo." />
      </Helmet>
      <div className="container">
        <div className="breadcum-sub">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section__title text-center mb-40 sub-ban-title-card">
                  <h2 className="title">Blogs</h2>
                  <p>Insights & Trends in Legal Process Outsourcing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="services__area section-py-130">
        <div className="container">
          <div className="row gutter-y-30 justify-content-center">
            {loading ? (
              <div className="text-center">Loading blogs...</div>
            ) : blogs.length === 0 ? (
              <div className="text-center">No blogs found.</div>
            ) : (
              blogs.map((blog, index) => (
                <div className="col-xl-4 col-lg-4 col-md-4" key={index}>
                  <div className="services__item-six shine__animate-item">
                    <div className="blog-page-card">
                      <div className="services__thumb-six shine__animate-link">
                        <Link to={`/Blog-detail/${blog.id}`}>
                          <img
                            src={`https://bouloulpo.com/bouloulpo_admin/public/uploads/${blog.img}`}
                            alt={blog.title}
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="services__content-six">
                        <h3 className="title">
                          <Link to={`/Blog-detail/${blog.id}`}>
                            {blog.title}
                          </Link>
                        </h3>
                        <p className="card12">
                          {blog.description.replace(/<[^>]*>?/gm, "")}
                        </p>
                      </div>
                    </div>
                    <Link to={`/Blog-detail/${blog.id}`}>
                      <img
                        src="assets/img/icons/right_arrow.svg"
                        alt=""
                        class="injectable"
                      />
                      Read more
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
