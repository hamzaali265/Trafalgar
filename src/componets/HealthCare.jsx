import dots from "../assets/dots.svg";
import healthCareSvg from "../assets/healthcare.svg";

function HealthCareSection(params) {
  return (
    <div>
      <div
        className="center"
        style={{
          display: "flex",
          marginTop: "220px",
          justifyContent: "space-between",
          gap: "137px",
        }}
      >
        <div>
          <img
            src={healthCareSvg}
            alt="health-care"
            style={{ height: "477px", width: "650px" }}
          />
        </div>
        <div>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "56px",
              fontFamily: "Mulish",
              color: "#000000",
            }}
          >
            Leading healthcare <br /> providers
          </h1>
          <div
            style={{
              backgroundColor: "#000000",
              height: "2px",
              width: "56px",
              marginTop: "26px",
              marginBottom: "31px",
            }}
          ></div>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "300",
              lineHeight: "30px",
              fontFamily: "Mulish",
              color: "#7D7987",
            }}
          >
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
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
      <div
        style={{
          display: "flex",
          marginBottom: "126px",
          marginTop: "26px",
          justifyContent: "flex-end",
        }}
      >
        <img src={dots} alt="dots image" />
      </div>
    </div>
  );
}

export default HealthCareSection;
