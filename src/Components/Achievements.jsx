import client from "../assets/Achievements/client.png";
import worker from "../assets/Achievements/worker.png";
import project from "../assets/Achievements/project.png";
import country from "../assets/Achievements/country.png";

const Achivements = () => {
  return (
    <div className="achievements">
      <div className="text">
        <h1>Over a Decade of Achievements</h1>
        <p>With our super powers we have reached this.</p>
      </div>
      <div className="icons">
        <div className="left">
          <div className="client">
            <img src={client} />
            <p>Satisfied Clients</p>
          </div>
          <div className="worker">
            <img src={worker} />
            <p>Skilled Workers</p>
          </div>
        </div>
        <div className="right">
          <div className="project">
            <img src={project} />
            <p>Projects Completed</p>
          </div>
          <div className="country">
            <img src={country} />
            <p>Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
