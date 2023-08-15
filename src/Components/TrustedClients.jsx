import spark from "../assets/TrustedClients/spark.png";
import logaz from "../assets/TrustedClients/logaz.png";
import spona from "../assets/TrustedClients/spona.png";
import olla from "../assets/TrustedClients/olla.png";

const TrustedClients = () => {
  return (
    <div className="trustedClients">
      <h1>our trusted clients</h1>
      <div className="clients">
        <img src={spark} />
        <img src={logaz} />
        <img src={olla} />
        <img src={spona} />
      </div>
    </div>
  );
};

export default TrustedClients;
