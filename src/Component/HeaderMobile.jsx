// import  { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const HeaderMobile = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showSticky, setShowSticky] = useState(false);

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY < lastScrollY) {
//         // Scrolling up
//         setShowSticky(true);
//       } else {
//         // Scrolling down
//         setShowSticky(false);
//       }

//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`main-header ${showSticky ? "sticky" : ""}`}
//       id="mobile-manu"
//     >
//       <div className="header-wrapper">
//         <div className="logo">
//           <Link to="/">
//             <img
//               src="/assets/img/boulo-ipo-logo.png"
//               alt="Logo"
//               className="mobile-nav-logo"
//             />
//           </Link>
//         </div>

//         <nav className="desktop-menu">
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/roles">Roles</Link>
//             </li>
//             <li>
//               <Link to="/service">Services</Link>
//             </li>
//             <li>
//               <Link to="/blog">Blog</Link>
//             </li>
//             {/* <li><Link to="/blog">Internal</Link></li> */}
//           </ul>
//         </nav>

//         <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
//         <button className="close-btn" onClick={() => setMenuOpen(false)}>
//           ✕
//         </button>
//         <ul>
//           <li>
//             <Link to="/" onClick={() => setMenuOpen(false)}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" onClick={() => setMenuOpen(false)}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/internalguide" onClick={() => setMenuOpen(false)}>
//               Internal Guide
//             </Link>
//           </li>

//           <li>
//             <Link to="/roles" onClick={() => setMenuOpen(false)}>
//               Roles
//             </Link>
//           </li>
//           <li>
//             <Link to="/service" onClick={() => setMenuOpen(false)}>
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link to="/blog" onClick={() => setMenuOpen(false)}>
//               Blog
//             </Link>
//           </li>
//           {/* <li><Link to="/Career" onClick={() => setMenuOpen(false)}>Career</Link></li> */}
//           {/* <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li> */}
//         </ul>
//       </div>

//       {/* Backdrop */}
//       {menuOpen && (
//         <div className="backdrop" onClick={() => setMenuOpen(false)}></div>
//       )}
//     </header>
//   );
// };

// export default HeaderMobile;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // for dropdowns

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`main-header ${showSticky ? "sticky" : ""}`}
      id="mobile-manu"
    >
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/">
            <img
              src="/assets/img/boulo-ipo-logo.png"
              alt="Logo"
              className="mobile-nav-logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="desktop-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            {/* Roles Dropdown */}
            <li
              className="has-dropdown"
              onMouseEnter={() => setOpenDropdown("roles")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link to="/roles">Roles</Link>
              {openDropdown === "roles" && (
                <ul className="dropdown">
                  <li>
                    <Link to="/roles/lawyer">Lawyer</Link>
                  </li>
                  <li>
                    <Link to="/roles/paralegal">Paralegal</Link>
                  </li>
                  <li>
                    <Link to="/roles/research">Legal Researcher</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Services Dropdown */}
            <li
              className="has-dropdown"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link to="/service">Services</Link>
              {openDropdown === "services" && (
                <ul className="dropdown">
                  <li>
                    <Link to="/service/drafting">Drafting</Link>
                  </li>
                  <li>
                    <Link to="/service/review">Document Review</Link>
                  </li>
                  <li>
                    <Link to="/service/support">Admin Support</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/internalguide" onClick={() => setMenuOpen(false)}>
              Internal Guide
            </Link>
          </li>

          {/* Roles Dropdown */}
          <li className="has-dropdown">
            <button
              className="dropdown-toggle"
              onClick={() =>
                setOpenDropdown(openDropdown === "roles" ? null : "roles")
              }
            >
              Roles
            </button>
            {openDropdown === "roles" && (
              <ul className="dropdown">
                <li>
                  <Link
                    to="/Case-Coordinator"
                    onClick={() => setMenuOpen(false)}
                  >
                    Case Coordinator
                  </Link>
                </li>
                <li>
                  <Link to="/Case-Manager" onClick={() => setMenuOpen(false)}>
                    Case Manager
                  </Link>
                </li>
                <li>
                  <Link to="/Paralegal-Role" onClick={() => setMenuOpen(false)}>
                    Paralegal Role
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Secretary-Receptionist"
                    onClick={() => setMenuOpen(false)}
                  >
                    Secretary/Receptionist
                  </Link>
                </li>
                <li>
                  <Link to="/Legal-Admin" onClick={() => setMenuOpen(false)}>
                    Legal Admin
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Intake-Specialist"
                    onClick={() => setMenuOpen(false)}
                  >
                    Intake Specialist
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Services Dropdown */}
          <li className="has-dropdown">
            <button
              className="dropdown-toggle"
              style={{ border: "none" }}
              onClick={() =>
                setOpenDropdown(openDropdown === "services" ? null : "services")
              }
            >
              Services
            </button>
            {openDropdown === "services" && (
              <ul className="dropdown">
                <li>
                  <Link
                    to="/Paralegal-service"
                    onClick={() => setMenuOpen(false)}
                  >
                    Paralegal Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contract-life-cycle-mangaement"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contract Life Cycle Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/document-review"
                    onClick={() => setMenuOpen(false)}
                  >
                    Document Review
                  </Link>
                </li>
                <li>
                  <Link to="/admin-supports" onClick={() => setMenuOpen(false)}>
                    Admin Supports
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className="backdrop" onClick={() => setMenuOpen(false)}></div>
      )}
    </header>
  );
};

export default HeaderMobile;
