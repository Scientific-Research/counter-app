import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
    //count: 0,

    tags: ["tag1", "tag2", "tag3", "tags4", "tag5", "tag6"],
    // tags: [],
  };
  // constructor(_a, _b, _c) {
  //   super();
  //   this.a = _a; //Z.Beispiele
  //   this.b = _b; //Z.Beispiele
  //   this.c = _c; //Z.Beispiele
  //   // console.log("Constructor", this);
  //   // Weil es eine onClick function ist, benutzen wir  .bind() in einem  Konstruktor, um sie mit .this weiter benutzen zu können,
  //   // und wir werden nicht handleIncrement function as Parameter in  runde Klamme wie _a,_b,_c schreiben.
  //   // mit normaler Funktion wie renderTags() unten, brauchen wir keiner Konstruktor, um .this zu zugreifen.
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //In Eventhandler(onClick) haben wir keiner Zugriff zur .this

  // Zweite Lösung zum Zugriff .this Ohne Konstruktor zu nutzen ist: Die Verwendung eine Arrow function(Pfeil Funktion)
  handleIncrement = (nameVonProdukt) => {
    let result = this.state.value++;
    console.log("Increment Clicked!", result);
    console.log("Name des Produkts: " + nameVonProdukt);

    this.setState({ value: this.state.value++ });
    // console.log(this.state.tags);
    // return result;
  };

  doHandleIncrement = () => {
    const a = {
      id: 100,
      name: "Poluver H&M",
    };
    this.handleIncrement(a.name);
  };

  renderTags() {
    // console.log(this.state.tags.length);
    // Ternary Operators
    // return this.state.tags.length === 0 ? (
    //   <p>"There are no tags"</p>
    // ) : (
    //   <ul>
    //     {this.state.tags.map((tag) => (
    //       <li key={tag}>{tag}</li>
    //     ))}
    //   </ul>
    // );
    // oder mit if-Anweisungen
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    console.log("props", this.props);
    return (
      // <div>
      //   {this.state.tags.length === 0 && "There are no Tags"}
      //   {this.renderTags()}
      // </div>
      (<p>{this.renderTags()}</p>),
      (
        <div>
          <span className={this.getBadgeClasses()}>{this.format()}</span>
          <button
            onClick={this.doHandleIncrement}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
        </div>
      )
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  format() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
