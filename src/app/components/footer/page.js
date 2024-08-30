// import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "../mailchimpform/page";
// import logo from "/img/logo.svg";
// import navIcon1 from "../../../assets/img/nav-icon1.svg";
// import navIcon2 from "../../../assets/img/nav-icon2.svg";
// import navIcon3 from "../../../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="pb-[50px] bg-[url('/img/footer-bg.png')] bg-center bg-cover bg-no-repeat">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full sm:w-1/2">
            <img src="/img/logo.svg" alt="Logo" className="w-1/4" />
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <div className="social-icon">
              <a href="#" className="inline-block mr-2">
                <img src="/img/nav-icon1.svg" alt="Icon" />
              </a>
              <a href="#" className="inline-block mr-2">
                <img src="/img/nav-icon2.svg" alt="Icon" />
              </a>
              <a href="#" className="inline-block">
                <img src="/img/nav-icon3.svg" alt="Icon" />
              </a>
            </div>
            <p className="font-normal text-sm text-[#B8B8B8] tracking-wider mt-5">
              Copyright 2022. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
