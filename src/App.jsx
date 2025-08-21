import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./Component/Contact";
import ScrollToTop from "./Component/ScrollToTop";
import Roles from "./pages/Roles";
import Service from "./pages/Service";
import Paralegal from "./pages/paralegal/Paralegal";
import Contract from "./pages/paralegal/Contract";
import Document from "./pages/paralegal/Document";
import Admin from "./pages/paralegal/Admin";
import Blog from "./pages/Blog";
import Legal from "./pages/paralegal/paralegal-service/Legal";
import DraftComplaints from "./pages/paralegal/paralegal-service/DraftComplaints";
import DraftCaseStatus from "./pages/paralegal/paralegal-service/DraftCaseStatus";
import DraftCorrespondence from "./pages/paralegal/paralegal-service/DraftCorrespondence";
import Deposition from "./pages/paralegal/paralegal-service/Deposition";
import CaseCoordinator from "./pages/Roles/CaseCoordinator";
import CaseManager from "./pages/Roles/CaseManager";
import ParalegalRole from "./pages/Roles/ParalegalRole";
import SecretaryReceptionist from "./pages/Roles/SecretaryReceptionist";
import LegalAdmin from "./pages/Roles/LegalAdmin";
import IntakeSpecialist from "./pages/Roles/IntakeSpecialist";
import Blog_detail from "./pages/Blog_detail";
import Booking from "./pages/Booking";
import ApplyForm from "./pages/ApplyForm";
import HeaderMobile from "./Component/HeaderMobile";
import Career from "./pages/Career";
import CareerDetails from "./pages/CareerDetails";
import Footer from "./Component/Footer";
import CareerNew from "./pages/CareerNew";
import CareerNewDetails from "./pages/CareerNewDetails";
import Chatbot from "./Component/Chatbot";
import InternalGuide from "./pages/specialties/InternalGuide";
import Personal from "./pages/Specialties/Subpages/Personal";
import Criminal from "./pages/Specialties/Subpages/Criminal";
import Family from "./pages/Specialties/Subpages/Family";
import Immigration from "./pages/Specialties/Subpages/Immigration";
import RealEstate from "./pages/Specialties/Subpages/RealEstate";
import Employment from "./pages/Specialties/Subpages/Employment";
import Corporate from "./pages/Specialties/Subpages/Corporate";
import EstatePlanning from "./pages/Specialties/Subpages/EstatePlanning";
import Bankruptcy from "./pages/Specialties/Subpages/Bankruptcy";
import Intellectual from "./pages/Specialties/Subpages/Intellectual";
import ContractLaw from "./pages/Specialties/Subpages/ContractLaw";
import Civil from "./pages/Specialties/Subpages/Civil";
import Environmental from "./pages/Specialties/Subpages/Environmental";
import Taxlaw from "./pages/Specialties/Subpages/Taxlaw";
import Healthcare from "./pages/Specialties/Subpages/Healthcare";
import Administrative from "./pages/Specialties/Subpages/Administrative";
import Insurance from "./pages/Specialties/Subpages/Insurance";
import Construction from "./pages/Specialties/Subpages/Construction";
import Maritime from "./pages/Specialties/Subpages/Maritime";
import Medialaw from "./pages/Specialties/Subpages/Medialaw";
import Consumerprotection from "./pages/Specialties/Subpages/Consumerprotection";
import Transportation from "./pages/Specialties/Subpages/Transportation";
import Education from "./pages/Specialties/Subpages/Education";
import Municipal from "./pages/Specialties/Subpages/Municipal";
// import "./App.css";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <HeaderMobile />
      <Header />
      <Chatbot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/service" element={<Service />} />

        <Route path="/paralegal-service" element={<Paralegal />} />
        <Route path="/contract-life-cycle-management" element={<Contract />} />
        <Route path="/document-review" element={<Document />} />
        <Route path="/admin-supports" element={<Admin />} />
        <Route path="/Legal" element={<Legal />} />
        <Route path="/DraftCaseStatus" element={<DraftCaseStatus />} />
        <Route path="/DraftCorrespondence" element={<DraftCorrespondence />} />
        <Route path="/services/:slug" element={<DraftComplaints />} />
        <Route path="/Deposition" element={<Deposition />} />
        <Route path="/Case-Coordinator" element={<CaseCoordinator />} />
        <Route path="/Case-Manager" element={<CaseManager />} />
        <Route path="/Paralegal-Role" element={<ParalegalRole />} />
        <Route
          path="/Secretary-Receptionist"
          element={<SecretaryReceptionist />}
        />
        <Route path="/Legal-Admin" element={<LegalAdmin />} />
        <Route path="/Intake-Specialist" element={<IntakeSpecialist />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/CareerNew" element={<CareerNew />} />
        <Route path="/CareerNewDetails" element={<CareerNewDetails />} />
        <Route path="/CareerDetails/:id" element={<CareerDetails />} />
        <Route path="/Blog-detail/:id" element={<Blog_detail />} />
        <Route path="/Booking/:id" element={<Booking />} />
        <Route path="/ApplyForm/:id" element={<ApplyForm />} />

        {/* Specialties */}
        <Route path="/internalguide" element={<InternalGuide />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/Criminal" element={<Criminal />} />
        <Route path="/Family" element={<Family />} />
        <Route path="/Immigration" element={<Immigration />} />
        <Route path="/RealEstate" element={<RealEstate />} />
        <Route path="/Employment" element={<Employment />} />
        <Route path="/Corporate" element={<Corporate />} />
        <Route path="/EstatePlanning" element={<EstatePlanning />} />
        <Route path="/Bankruptcy" element={<Bankruptcy />} />
        <Route path="/Intellectual" element={<Intellectual />} />
        <Route path="/ContractLaw" element={<ContractLaw />} />
        <Route path="/Civil" element={<Civil />} />
        <Route path="/Environmental" element={<Environmental />} />
        <Route path="/Taxlaw" element={<Taxlaw />} />
        <Route path="/Healthcare" element={<Healthcare />} />
        <Route path="/Administrative" element={<Administrative />} />
        <Route path="/Insurance" element={<Insurance />} />
        <Route path="/Construction" element={<Construction />} />
        <Route path="/Maritime" element={<Maritime />} />
        <Route path="/Medialaw" element={<Medialaw />} />
        <Route path="/Consumerprotection" element={<Consumerprotection />} />
        <Route path="/Municipal" element={<Municipal />} />
        <Route path="/Transportation" element={<Transportation />} />
        <Route path="/Education" element={<Education />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
