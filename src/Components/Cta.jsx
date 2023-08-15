import bg from "../assets/Cta/bg.png";

const Cta = () => {
  return (
    <div className="cta">
      <img src={bg} />
      <div className="content">
        <h1>Get a Free Quote Now!</h1>
        <div className="inputs">
          <input type="email" placeholder="Your Work Email Address" />
          <button>Join the waitlist</button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
