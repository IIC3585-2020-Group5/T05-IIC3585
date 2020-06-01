import React from "react";



export default class CityForm extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.onSubmit = this.onSubmit.bind(this);
    //   }

    _handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        this.handleSubmit();
      }
    }

    handleSubmit = () => {
        const city = this.city.value;
        console.log(city);
        this.props.addCity(city);
        this.city.value = "";
    }

    render() {
      return (
        <div>
          <h1>Hello</h1>
          <p>Enter your city:</p>
          <input
            type="text"  
            ref={(c) => this.city = c} 
            onKeyDown={this._handleKeyDown}
          />
          <button 
            name="" 
            id="" 
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >Add City</button>
        </div>
      );
    }
  }
