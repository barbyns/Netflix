import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function MyFooter() {
  return (
    <footer className="bg-dark text-light pt-4">
      <div className="container">
        <div className="social-icons mb-4">
          <a href="#" className="text-light fs-4 me-3"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-light fs-4 me-3"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-light fs-4 me-3"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-light fs-4"><i className="bi bi-youtube"></i></a>
        </div>

        <div className="footer-links row">
          <div className="col-md-3 col-sm-6">
            <p className="footer-text">Audio and Subtitles</p>
            <p className="footer-text">Media Center</p>
            <p className="footer-text">Privacy</p>
            <p className="footer-text">Contact Us</p>
          </div>
          <div className="col-md-3 col-sm-6">
            <p className="footer-text">Audio Description</p>
            <p className="footer-text">Investor Relations</p>
            <p className="footer-text">Legal Notices</p>
          </div>
          <div className="col-md-3 col-sm-6">
            <p className="footer-text">Help Center</p>
            <p className="footer-text">Jobs</p>
            <p className="footer-text">Cookie Preferences</p>
          </div>
          <div className="col-md-3 col-sm-6">
            <p className="footer-text">Gift Cards</p>
            <p className="footer-text">Terms of Use</p>
            <p className="footer-text">Corporate Information</p>
          </div>
        </div>

        <div className="footer-bottom text-start mt-4">
          <button className="btn btn-outline-secondary border border-2 rounded-0 border-secondary">
            Service Code
          </button>
          <p className="mt-3 footer-text">&copy; 1997-2019 Netflix, Inc. (i-0d00fcd2fd9c9c0de)</p>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
