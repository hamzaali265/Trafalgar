import bgShape from "../assets/bgShape.svg";
import consultation from "../assets/consultation.svg";
import DetailInfo from "../assets/detailsinfo.svg";
import dots from "../assets/dots.svg";
import EmergencyCare from "../assets/emergencycare.svg";
import pharmacy from "../assets/pharmacy.svg";
import searchIcon from "../assets/search.svg";
import Tracking from "../assets/tracking.svg";
import ServicesCard from "../componets/ServicesCard";
import "../styles/main_section.css";

function OurServicesSection() {
  const services = [
    {
      img: searchIcon,
      title: "Search doctor",
      description:
        "Choose your doctor from thousands\nof specialist, general, and trusted\nhospitals",
    },
    {
      img: pharmacy,
      title: "Online pharmacy",
      description:
        "Buy  your medicines with our\nmobile application with a simple\ndelivery system",
    },
    {
      img: consultation,
      title: "Consultation",
      description:
        "Free consultation with our trusted\ndoctors and get the best\nrecomendations",
    },
    {
      img: DetailInfo,
      title: "Details info",
      description:
        "Free consultation with our trusted\ndoctors and get the best\nrecomendations",
    },
    {
      img: EmergencyCare,
      title: "Emergency care",
      description:
        "You can get 24/7 urgent care for\nyourself or your children and your\nlovely family",
    },
    {
      img: Tracking,
      title: "Tracking",
      description: "Track and save your medical history\nnd health data ",
    },
  ];
  return (
    <div style={{ marginTop: "192px", height: "1200px" }}>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Mulish",
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "26px",
        }}
      >
        Our Services
      </h1>
      <div
        style={{
          width: "56px",
          height: "2px",
          backgroundColor: "#000000",
          margin: "0 auto",
          borderRadius: "5px",
          marginBottom: "33px",
        }}
      ></div>
      <p
        style={{
          color: "#7D7987",
          fontFamily: "Mulish",
          fontSize: "18px",
          fontWeight: "300",
          textAlign: "center",
          lineHeight: "30px",
        }}
      >
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment <br />
        with our highly qualified doctors you can consult with us which type of
        service is suitable for your health
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          zIndex: "-1",
        }}
      >
        <img
          src={bgShape}
          height={"671.35px"}
          width={"937px"}
          style={{
            opacity: "60%",
            left: "245px",
            top: "0.01px",
            // position: "absolute"
          }}
        />
        <img src={dots} />
      </div>

      <div
        className="center"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "80px",
          width: "100%",
          transform: "translate(5%, -70%)",
          zIndex: "1",
          // transform: "translate(50%, -20%)",
        }}
      >
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            img={service.img}
            title={service.title}
            description={service.description}
          />
        ))}
        <button
          style={{
            marginTop: "72px",
            border: "1.4px solid #458FF6",
            borderRadius: "55px",
            padding: "12px 51px",
            backgroundColor: "#ffff",

            fontFamily: "Mulish",
            fontSize: "18px",
            fontWeight: "700",
            color: "#458FF6",
          }}
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

export default OurServicesSection;
