import React from 'react';
import './style.css'
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";
import Navbar from './Navbar';
import Finder from './components/Finder';
import RightBar from './components/RightBar';
import LeftBar from './components/LeftBar';
import Results from './components/Results';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      flights: [],
    };
  }

  writeToAppState = (flights) => {
    this.setState({
      flights,
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Finder writeToState={this.writeToAppState} />
        <Layout type="Search">
          <LayoutColumn>
            <LeftBar />
            The leftbar thing

          </LayoutColumn>
          <LayoutColumn>
            <Results />
            The main section for displaying the results
      </LayoutColumn>
          <LayoutColumn>
            <RightBar />
            The right SideBar for promotion
      </LayoutColumn>
        </Layout>
      </div>
    );
  }
}

export default App;
