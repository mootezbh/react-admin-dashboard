const Footer = () => {
  return (
    <div className="row mt-5 mb-4 footer">
      <div className="col-sm-8">
        <span>
          © All rights reserved 2023 designed by{" "}
          <a className="text-theme" href="#">
            test
          </a>
        </span>
      </div>
      <div className="col-sm-4 text-right">
        <a href="#" className="ml-2">
          Contact Us
        </a>
        <a href="#" className="ml-2">
          Support
        </a>
      </div>
    </div>
  );
};

export default Footer;
