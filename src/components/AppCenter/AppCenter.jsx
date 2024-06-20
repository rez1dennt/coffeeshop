import "./AppCenter.css";
import HeaderCenter from "../../assets/HeaderCenter/headerCenterLogo.svg";

const AppCenter = () => {
  return (
      <div className="header__center">
        <h1>Everything You Love About Coffee</h1>
        <img src={HeaderCenter} />
        <h2>We makes every day full of energy and taste</h2>
        <h2>Want to try our beans?</h2>
        <button>More</button>
      </div>
    
  );
};

export default AppCenter;
