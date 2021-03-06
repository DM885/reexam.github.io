import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { solvers } from '../helpers'


export class AutomaticCheck extends Component {
  constructor(props) {
    super(props);
    this.solveToCheck = {
      solver: solvers[0],
      isAutoCheck: false,
    };
    this.state = {
      solvers: [],
      satisfy: true,
      notsatisfy: false,
    };
    
  }
  
  addSolver() {
    this.setState({
      solvers: [
        ...this.state.solvers,
        {
          ...this.solveToCheck,
        },
      ],
    });
  }

  solveAutomaticTestFn = () => {
    var var1 = 2;
    var var2 = 5;    
    const var3 = var1 + var2;
    if (var3 === var1 + var2) {
      return this.satisfy;
    }
    return this.notsatisfy;
  };

  handleAutomaitcCheckBox = () => {
    const getSolver = this.data.solvers.some(
      (d) => !d.solverId || d.solverId === -1
    );
    const simpleTest = this.solveAutomaticTestFn();
    if (getSolver && this.solveToCheck.isAutoCheck) {
      alert("You need to perform solver automatic check!");
    } else {
      if (simpleTest === this.satisfy) {
        alert("Solver satisfy the rule");
      } else {
        alert("The selected solver does not satisfy the rule");
      }
    }
  };

  render() {
    return (
      <div className="container">
        <h2>Solver Automatic Check </h2>
        <form onSubmit={(e) => this.save(e)}>

        <div className= 'dropdown'>
            <select className='form-select form-select-lg mb-2'
            onChange={(e) => this.handleAutomaitcCheckBox              
            }
            defaultValue={this.state.value}
            aria-label=".form-select-lg"
            style={{ width: "40%" }}
            
            >
              <option value="select-solver">Select Solver</option>
              <option value="Solver">Solver #1</option>
              <option value="meat">Solver #2</option>
            </select>
          </div>        


          <div className="form-group pb-3">
            <label for="nameInp">Name</label>
            <input
              type="input"
              placeholder="solver name"
              className="form-control"
              id="nameInp"
              name="filename"
              style={{ width: "40%" }}
            />
          </div>    

          <div className="form-group pb-2">
            <label for="contentInp">New Solver</label>
            <input
              id="contentInp"
              type="file"
              onChange={(e) => this.parseFile(e)}
              className="form-control"
              multiple
              style={{ width: "40%" }}
            />
          </div>
          <h5>Solver check</h5>
          <div className="row">
            <div className="col-sm-4">
              <label htmlFor="flagA">Solver automatic check</label>
            </div>
            <div className="col-sm-8">
              <input
                type="checkbox"
                id="checkSolever"
                onChange={(e) => this.handleAutomaitcCheckBox}
                defaultValue={this.solverAutomaCheck}
                name="Checksolver"
                
              />
            </div>
          </div>
          <div className="btn-group mr-2" role="group">
            <button
              onClick={() => this.addSolver()}
              className="btn btn-primary mt-2"
            >
              Add Solver
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(AutomaticCheck)



