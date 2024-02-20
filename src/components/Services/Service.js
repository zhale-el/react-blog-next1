import "./Service.css";
import ServiceItem from "./ServiceItem";

function Service() {
  let services = [
    {
      serviceIcon: "bi bi-briefcase",
      serviceTitle: "WEB DESIG",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur perferendis eum non provident adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora ",
    },
    {
      serviceIcon: "bi bi-card-checklist",
      serviceTitle: "WEB DEVELOPMENT",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur perferendis eum non provident adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora ",
    },
    {
      serviceIcon: "bi bi-bar-chart",
      serviceTitle: "PHOTOGRAPHY",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur perferendis eum non provident adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora ",
    },
    {
      serviceIcon: "bi bi-binoculars",
      serviceTitle: "RESPONSIVE DESIGN",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur perferendis eum non provident adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora ",
    },
    {
      serviceIcon: "bi bi-brightness-high",
      serviceTitle: "GRAPHIC DESIGN",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur perferendis eum non provident adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora ",
    },
    {
      serviceIcon: "bi bi-calendar4-week",
      serviceTitle: "MARKETING SERVICES",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur perferendis eum non provident adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora ",
    },
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <ServiceItem {...services[0]}></ServiceItem>
          <ServiceItem {...services[1]}></ServiceItem>
          <ServiceItem {...services[2]}></ServiceItem>
          <ServiceItem {...services[3]}></ServiceItem>
          <ServiceItem {...services[4]}></ServiceItem>
          <ServiceItem {...services[5]}></ServiceItem>
        </div>
      </div>
    </section>
  );
}

export default Service;
