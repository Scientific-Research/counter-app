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

  // doHandleDelete = (counter) => {
  //   const values = this.state.counters.filter((c) => c._id !== counter.id);
  //   this.setState({ values });
  //   console.log(values);
  // };

  handleDelete = (counterId) => {
    // wir können nicht das Originale Array ändern, deswegen machen wie ein neues Array. Dieses Array heißt counters.
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState({ counters: counters });
    // oder in einer einfachen Form: ohne zweite counters
    this.setState({ counters });
    console.log(counterId);
    // this.handleDelete(this.counter);
    console.log("EventHandler hat begonen!");
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
            onDelete={this.handleDelete}
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
