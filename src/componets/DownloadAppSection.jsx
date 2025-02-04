import arrowdownload from "../assets/arrowdownload.svg";
import downloadAppSvg from "../assets/downloadapp.svg";

function DownloadAppSection() {
  return (
    <div
      className="center"
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "71px",
        marginBottom: "251px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "700",
            lineHeight: "48px",
            fontFamily: "Mulish",
            color: "#000000",
          }}
        >
          Download our <br /> mobile apps
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
          Our dedicated patient engagement app and <br />
          web portal allow you to access information <br />
          instantaneously (no tedeous form, long calls, <br /> or administrative
          hassle)
        </p>
        <button
          style={{
            marginTop: "40px",
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
          Download <img src={arrowdownload} alt="" />
        </button>
      </div>
      <div>
        <img
          src={downloadAppSvg}
          alt="health-care"
          style={{ height: "434px", width: "665px" }}
        />
      </div>
    </div>
  );
}

export default DownloadAppSection;
