
function Banner() {

  return (
    //   Contents of header
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://assets-content.moovup.com/images/2018-FAQ-banner-01-1.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents"></div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
