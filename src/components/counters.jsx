import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  render() {
    // mein Statement
    return this.state.counters.map((item) => <Counter>item.id</Counter>);

    // ander Statement
    // return (
    //   <div>
    //     {this.state.counters.map((counter) => (
    //       <Counter key={counter.id} />
    //     ))}
    //   </div>
    // );
  }
}

export default Counters;
