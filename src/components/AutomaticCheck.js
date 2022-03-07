import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { solvers } from '../helpers'


export class AutomaticCheck extends Component {
  solveToCheck = {
    solver: solvers[0],
    isAutoCheck: false
  };
  state = {
      satisfy: false,
      notsatisfy:false
  };

  addSolver() {
    this.setState({
      solvers: [
        ...this.state.solvers,
        {
          ...this.newSolver,
        },
      ],
    });
  }

  solveAutomaticTestFn =() => {
   const var1 = 2;
   const var2 = 5;
   const var3 = var1 + var2;   
    if (var3 === var1 + var2) {
      return this.satisfy;
    }
    return this.notsatisfy;
  }

  handleAutomaitcCheckBox = () => {
    const solverAutomaticCheck = this.data.solvers.some(
      (d) => !d.solverId || d.solverId === -1
    );
    const simpleTest = this.solveAutomaticTestFn();
    if (solverAutomaticCheck && this.newSolver.solverAutomaCheck) {
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
    return(
     <div className='container'>
        <h3>Solver Automatic Check </h3>           
      <select className='form-select form-select-lg mb-2'>        
      <option id="-1">Please select a solver</option>
        <option value="oranges">Outrageous Oranges</option>
        <option value="tomatoes">Technically a Fruit Tomatoes</option>
        <option value="bananas">Bodacious Bananas</option>
      </select>      
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
                  defaultValue ={this.solverAutomaCheck}
                  name="Checksolver"
                />
              </div>
            </div>
        <button className='btn btn-primary'>
          Add new solver
      </button>  
    </div>
    )}
}

export default withRouter(AutomaticCheck)



