import dots from "../assets/dots.svg";

function TestimonialsSection(params) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "477px",
          width: "1120px",
          background:
            "linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)",
          borderRadius: "24px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1
            style={{
              fontFamily: "Mulish",
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "48px",
              textAlign: "left",
              color: "#FFFFFF",
              margin: "64px auto 0px auto",
            }}
          >
            What our customer are saying
          </h1>
          <img src={dots} alt="dotsimage" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
