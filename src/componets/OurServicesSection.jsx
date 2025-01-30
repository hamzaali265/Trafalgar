import bgShape from "../assets/bgShape.svg";
import dots from "../assets/dots.svg";
import ServicesCard from "../componets/ServicesCard";
import "../styles/main_section.css";

function OurServicesSection() {
  return (
    <div style={{ marginTop: "192px" }}>
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
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            zIndex: "-1",
          }}
        >
          <img
            src={bgShape}
            height={"671px"}
            width={"937px"}
            style={
              {
                // position: "absolute"
              }
            }
          />
          <img src={dots} />
        </div>
        <div
          className="center"
          style={{
            zIndex: "1",
            position: "absolute",
            backgroundColor: "red",
            width: "100%",
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
          }}
        >
          <ServicesCard />
        </div>
      </div>
    </div>
  );
}

export default OurServicesSection;
