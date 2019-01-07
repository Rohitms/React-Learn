 import React from 'react';
 import ReactDOM from 'react-dom';
 import SeasonDisplay from './SeasonDisplay';
 import Spinner from './Spinner';


class App extends React.Component {

state ={ lat: null, errorMessage: '' };

componentDidMount() {
  window.navigator.geolocation.getCurrentPosition(
    position => this.setState({ lat: position.coords.latitude}),
    err => this.setState({ errorMessage: err.message })
  );
}

// componentDidMount() {
//   console.log('My Component was rendered to the screen');
// }
//
// componentDidUpdate() {
//   console.log('My componentwas just updated- it rerendered');
// }

renderContent() {
  if (this.state.errorMessage && !this.state.lat) {
    return <div> Error: {this.state.errorMessage} </div>;

  }

  if (!this.state.errorMessage && this.state.lat ) {
   return <SeasonDisplay lat ={this.state.lat} />

  }

    return <Spinner message="please accept location reques"/>;

}

//React neeed render defined!!
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }



}


ReactDOM.render(
  <App />,
  document.querySelector('#root'));

//bla
