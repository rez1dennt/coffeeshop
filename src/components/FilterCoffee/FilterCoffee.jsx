import "./FilterCoffee.css";
import FilterImg from "../../assets/FilterCoffee/71qBQnpQFYL.svg";
import { Component } from "react";

class FilterCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffees: [
        { name: "AROMISTICO Coffee 1 kg", country: "Brazil" },
        { name: "AROMISTICO Coffee 1 kg", country: "Kenya" },
        { name: "AROMISTICO Coffee 1 kg", country: "Columbia" },
        { name: "AROMISTICO Coffee 1 kg", country: "Brazil" },
        { name: "AROMISTICO Coffee 1 kg", country: "Brazil" },
        { name: "AROMISTICO Coffee 1 kg", country: "Brazil" },
      ],
      price: "6.99$",
      searchQuery: "",
      selectedCountry: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleCountryClick = (country) => {
    this.setState({ selectedCountry: country });
  };

  render() {
    const { coffees, searchQuery, selectedCountry } = this.state;

    const filteredCoffees = coffees.filter(coffee =>
      (!searchQuery || coffee.country.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!selectedCountry || coffee.country === selectedCountry)
    );
    
    const isEmpty = filteredCoffees.length === 0;

    return (
      <section className="filterCoffee">
        <div className="filterCoffee__content">
          <div className="filterCoffee__nav">
            <div className="filterCoffee__nav-left">
              <h1>Looking for</h1>
              <input
                className="filterInput"
                type="text"
                placeholder="start typing here..."
                value={searchQuery}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="filterCoffee__nav-right">
              <button className="filter__button" onClick={() => this.handleCountryClick("")}>
                Or filter
              </button>
              <button className="filter__button" onClick={() => this.handleCountryClick("Brazil")}>
                Brazil
              </button>
              <button className="filter__button" onClick={() => this.handleCountryClick("Kenya")}>
                Kenya
              </button>
              <button className="filter__button" onClick={() => this.handleCountryClick("Columbia")}>
                Columbia
              </button>
            </div>
          </div>
          {!isEmpty? (
            <div className="grid-container">
              {filteredCoffees.map((coffee, index) => (
                <div key={index} className="grid-item">
                  <img src={FilterImg} alt="Coffee" />
                  <h1>{coffee.name}</h1>
                  <h2>{coffee.country}</h2>
                  <h3>{this.state.price}</h3>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-results-found fadeIn">Ничего не найдено...</p>
          )}
        </div>
      </section>
    );
  }
}

export default FilterCoffee;