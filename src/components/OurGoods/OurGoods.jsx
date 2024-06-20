import "./OurGoods.css";
import OurGoodsImg from "../../assets/OurGoods/Mask Group.svg";
import AboutLogo from "../../assets/AboutLogo/AboutLogo.svg";
import FilterCoffee from "../FilterCoffee/FilterCoffee";

const OurGoods = () => {
  return (
    <section className="OurGoods">
      <div className="OurGoods__inner">
        <div className="OurGoods__content">
          <div className="OurGoods__left">
            <img src={OurGoodsImg} />
          </div>
          <div className="OurGoods__right">
            <h1>About our goods</h1>
            <img src={AboutLogo} />
            <p>
              Extremity sweetness difficult behaviour he of. On <br /> disposal
              of as landlord horrible. <br /> <br /> Afraid at highly months do
              things on at. Situation <br /> recommend objection do intention{" "}
              <br /> so questions. <br /> As greatly removed calling pleased
              improve an. <br /> Last ask him cold feel <br /> met spot shy
              want. Children me laughing we <br /> prospect answered followed.
              At it went <br /> is song that held help face.
            </p>
          </div>
        </div>
        <FilterCoffee />
      </div>
    </section>
  );
};

export default OurGoods;
