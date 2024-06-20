import "./Best.css";
import firstBlock from "../../assets/OurBestCard/1.svg";
import SecondBlock from "../../assets/OurBestCard/2.svg";
import ThirdBlock from "../../assets/OurBestCard/3.svg";
import { Component } from "react";

class Best extends Component {
  constructor(props) {
    super(props);
    this.state = {
      best: [
        {
          name: "Solimo Coffee Beans 2 kg",
          price: "10.73$",
          img: firstBlock,
        },
        {
          name: "Solimo Coffee Beans 2 kg",
          price: "10.73$",
          img: SecondBlock,
        },
        {
          name: "Solimo Coffee Beans 2 kg",
          price: "10.73$",
          img: ThirdBlock,
        },
      ],
      price: "6.99$",
    };
  }

  render() {
    return (
      <div className="Best">
        <div className="Best__content">
          <div className="Best__text">Our best</div>
          <div className="Best__blocks">
            {this.state.best.map((best, index) => {
              return (
                <div key={index} className="Best__block">
                  <img src={best.img} alt="best" />
                  <h1>{best.name}</h1>
                  <h2>{best.price}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Best;
