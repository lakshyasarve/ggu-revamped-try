import { useState } from "react";

const Faq = () => {
  const faqs1 = [
    {
      title: "What is EQUILIBRIO?",
      dec: "EQUILIBRIO is the annual technical festival held at Guru Ghasidas Vishwavidyalaya (A Central University), Bilaspur, Chhattisgarh. It is a technical extravagant platform where students get an opportunity to showcase their talent and celebrate youthism. The fest paves a path for the students to sharpen their skills and explore the dynamics of the technical world.",
    },
    {
      title: "What is SOLASTA?      ",
      dec: "EQUILIBRIO-2023 presents SOLASTA- Luminosity in the Nature. The ultimate event experience that will leave you feeling energized, inspired, and connected. Solasta is a powerful word that evokes a sense of warmth and light, and that's exactly what this event will provide. Solasta is the perfect name for an event that brings people together to share ideas, network, and build relationships.",
    },
    {
      title: "What is the mode of conduction and the venue of events?",
      dec: "The events are completely conducted in the offline mode and at the University campus itself.",
    },
    {
      title: "Where to catch the regular updates of EQUILIBRIO?",
      dec: "Please follow our Instagram, Twitter, Facebook and LinkedIn under the name of Equilibrio for regular updates.",
    },
  ];
  const faqs2 = [
    {
      title: "What are the highlights of the fest?",
      dec: "Celebrity Night, EDM Night, DJ Night, Socio-Cultural Events",
    },
    {
      title: "What are the stars of technical events?",
      dec: "Roboterry, RoboSumo, Blind Coding, ErgoGenius, Aquabotics",
    },
    {
      title: "Where to reach out in case of query?",
      dec: "For any queries contact us at equilibrio.office@gmail.com",
    },
    {
      title: "How to register?",
      dec: "You can register by navigating to the events section then clicking on Register Now",
    },
  ];
  const [active, setActive] = useState(`a0`);
  const faqMap = (arr, index) => {
    return arr.map((data, i) => (
      <div className="fn_cs_accordion" key={i}>
        <div className={`acc_item ${index + i === active ? "active" : ""}`}>
          <div
            className="acc_header"
            onClick={() =>
              setActive(`${index + i}` === active ? null : `${index + i}`)
            }
          >
            <h3 className="fn__maintitle" data-text={data.title}>
              {data.title}
            </h3>
            <span className="icon">
              <span />
            </span>
          </div>
          <div
            className="acc_content"
            style={{
              display: `${index + i === active ? "block" : "none"}`,
            }}
          >
            <p>{data.dec}</p>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <section id="faq">
      <div className="container">
        <div className="fn_cs_faq">
          <div className="faq_col">
            <h3 className="fn__maintitle" data-text="FAQ">
              FAQ
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
            <p>
              EQUILIBRIO presents SOLASTA- Luminosity in the Nature. It is the annual socio-cultural tech fest held at Guru Ghasidas Vishwavidyalaya (A Central University), Bilaspur Chhattisgarh. SOLASTA is a great platform where innovation meets technology and creativity turns into reality.
              </p>
              <p>
              It is a wonderful learning experience for everyone who wishes to explore and evolve in their particular field of interest. It aims at channeling passion and celebrating flair through various escapade events, skill-building workshops, ingenious products and bilateral talk-shows. 
              </p>
            </div>
          </div>
          <div className="faq_col">
            <div className="fn_cs_accordion">{faqMap(faqs1, "a")}</div>
          </div>
          <div className="faq_col">
            <div className="fn_cs_accordion">{faqMap(faqs2, "b")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
