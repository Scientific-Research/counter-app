import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    // mein Statement
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={true}
            id={counter.id}
          >
            {/* Props Children */}
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}
// ander Statement
// return (
//   <div>
//     {this.state.counters.map((counter) => (
//       <Counter key={counter.id} />
//     ))}
//   </div>
// );

export default Counters;
