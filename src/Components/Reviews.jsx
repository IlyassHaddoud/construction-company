import { useState } from "react";
import client1 from "../assets/reviews/client1.png";
import client2 from "../assets/reviews/client2.png";
import client3 from "../assets/reviews/client3.png";
import client4 from "../assets/reviews/client4.png";
import client5 from "../assets/reviews/client5.png";

const Reviews = () => {
  const [clients, setClients] = useState([
    {
      id: 0,
      image: client1,
      name: "Jane Cooper",
      fonction: "CEO, ABC Corpo",
      comment:
        "We had an incredible experience working with them and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
      showInfo: true,
    },
    {
      id: 1,
      image: client2,
      name: "Alexandra Thom",
      fonction: "Radiant Cosmo",
      comment:
        "Their insights injected a new vitality into our marketing campaigns. In just a short span, they reimagined our brand's image and messaging strategy. Their ability to understand consumer behavior and market trends was truly impressive. We're thankful for the positive impact they had on our brand perception",
      showInfo: false,
    },
    {
      id: 2,
      image: client3,
      name: "Sophia Roberts",
      fonction: "Founder, NBR",
      comment:
        "Working with them brought a breath of fresh air to our wellness programs. Their deep understanding of holistic practices and wellness trends shaped transformative experiences for our clients. Their adaptability and empathy made them a perfect fit for our team. Thanks to their contributions, our retreats have reached new heights of popularity.",
      showInfo: false,
    },
    {
      id: 3,
      image: client4,
      name: "David Anderson",
      fonction: "VP of Sales",
      comment:
        "Their sales strategies had an immediate impact on our revenue. In just a matter of weeks, they managed to identify untapped market segments and propose innovative approaches. Their analytical skills and business acumen are commendable. We're grateful for their contribution to our bottom line growth",
      showInfo: false,
    },
    {
      id: 4,
      image: client5,
      name: "Daniel Ramirez",
      fonction: "TechnoSphere",
      comment:
        "Collaborating with them on our tech projects was an enlightening experience. Their quick grasp of intricate coding challenges led to elegant solutions. Their teamwork and coding prowess accelerated our development timelines significantly. Their commitment to excellence is evident in the quality of our final products",
      showInfo: false,
    },
  ]);

  const [currentClient, setCurrentClient] = useState(clients[0]);

  const showComment = (id) => {
    setCurrentClient(clients[id]);
    const newClientsArray = clients.map((client) => {
      if (client.id == id) {
        return { ...client, showInfo: true };
      } else {
        return { ...client, showInfo: false };
      }
    });
    setClients(newClientsArray);
  };

  return (
    <div className="reviews">
      <h1>Few Words From Our Clients</h1>
      <div className="comment">{currentClient.comment}</div>
      <div className="clients">
        {clients.map((client) => (
          <div className="client" key={client.id}>
            <img
              data-key={client.id}
              src={client.image}
              onClick={(e) => showComment(e.target.getAttribute("data-key"))}
            />
            <div
              className="info"
              style={{ display: client.showInfo ? "block" : "none" }}
            >
              <p>{client.name}</p>
              <p>{client.fonction}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
