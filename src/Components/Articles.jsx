import canadian from "../assets/Articles/canadian.png";
import australian from "../assets/Articles/australian.png";
import brazilian from "../assets/Articles/brazilian.png";

const Articles = () => {
  return (
    <div className="articles">
      <div className="article">
        <img src={australian} />
        <h2>Australian Construction Branches.</h2>
        <p>
          We'll Supply You With Materials To Create Your Dream Property From
          Foundation To Finish. Call To Get Started!
        </p>
        <a href="#">Read More</a>
      </div>
      <div className="article">
        <img src={brazilian} />
        <h2>Brazilian Construction Branches.</h2>
        <p>
          We'll Supply You With Materials To Create Your Dream Property From
          Foundation To Finish. Call To Get Started!
        </p>
        <a href="#">Read More</a>
      </div>
      <div className="article">
        <img src={canadian} />
        <h2>Canadian Construction Branches.</h2>
        <p>
          We'll Supply You With Materials To Create Your Dream Property From
          Foundation To Finish. Call To Get Started!
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default Articles;
