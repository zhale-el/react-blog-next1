import "./Service.css";
import ServiceItem from "./ServiceItem";

function Service() {
  let services = [
    {
      id: 1,
      serviceIcon: "bi bi-briefcase",
      serviceTitle: "WEB DESIG",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur perferendis eum non provident adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora ",
    },
    {
      id: 2,
      serviceIcon: "bi bi-card-checklist",
      serviceTitle: "WEB DEVELOPMENT",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur perferendis eum non provident adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora ",
    },
    {
      id: 3,
      serviceIcon: "bi bi-bar-chart",
      serviceTitle: "PHOTOGRAPHY",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur perferendis eum non provident adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora ",
    },
    {
      id: 4,
      serviceIcon: "bi bi-binoculars",
      serviceTitle: "RESPONSIVE DESIGN",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur perferendis eum non provident adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora ",
    },
    {
      id: 5,
      serviceIcon: "bi bi-brightness-high",
      serviceTitle: "GRAPHIC DESIGN",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur perferendis eum non provident adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora ",
    },
    {
      id: 6,
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
          {services.map((item) => (
            <div key={item.id} className="col-4">
              <ServiceItem {...item}></ServiceItem>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
