import React from 'react';
import './style.css'
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Layout type="Search">
        <LayoutColumn>
          The left SideBar for filters
    </LayoutColumn>
        <LayoutColumn>
          The main section for displaying the results
    </LayoutColumn>
        <LayoutColumn>
          The right SideBar for promotion
    </LayoutColumn>
      </Layout>
    </div>
  );
}

export default App;
