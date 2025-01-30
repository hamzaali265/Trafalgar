function ServicesCard(params) {
  const { img, title, description } = params;
  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        boxShadow: "10px 40px 50px 0px rgba(229, 233, 246, 0.4)",
        padding: "54px 40px 45px 40px",
      }}
    >
      <img src={img} height={90} width={90} style={{ marginBottom: "22px" }} />
      <p
        style={{
          fontFamily: "Mulish",
          fontSize: "20px",
          fontWeight: "700",
          color: "#000000",
          marginBottom: "22px",
        }}
      >
        {title}
      </p>
      <pre
        style={{
          fontFamily: "Mulish",
          fontSize: "16px",
          fontWeight: "300",
          color: "#7D7987",
          lineHeight: "28px",
        }}
      >
        {description}
      </pre>
    </div>
  );
}

export default ServicesCard;
