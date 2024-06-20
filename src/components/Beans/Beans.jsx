import "./Beans.css";
import BeansImg from "../../assets/Beans/Mask Group.svg";
import AboutLogo from "../../assets/AboutLogo/AboutLogo.svg";

const Beans = () => {
  return (
    <section className="Beans">
      <div className="Beans__content">
        <div className="Beans__left">
          <img src={BeansImg} />
        </div>
        <div className="Beans__right">
          <h1>About our beans</h1>
          <img src={AboutLogo} />
          <p>
            Extremity sweetness difficult behaviour he of. On <br /> disposal of
            as landlord horrible. <br /> <br /> Afraid at highly months do
            things on at. Situation <br />
            recommend objection do intention <br /> so questions. <br /> As
            greatly removed calling pleased improve an. <br /> Last ask him cold
            feel <br /> met spot shy want. Children me laughing we <br />{" "}
            prospect answered followed. At it went <br /> is song that held help
            face.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Beans;
