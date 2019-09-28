import React from 'react';
import httpService from '../services/httpService';
import SearchRequest from '../model/searchRequest';

import Content from '../containers/Content';

class Index extends React.Component {
  apiPath = 'http://localhost:3003/search';

  initFetch = (method, body) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return {
      headers,
      method,
      mode: 'cors',
      body: JSON.stringify(body),
    };
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    // Computer science
    const submitValue = [...e.target.elements];

    const body = {
      cabin: submitValue[0][0].checked ? 'ecomony' : 'business',
      cityFrom: submitValue[1].value,
      cityTo: submitValue[2].value,
      tripType: submitValue[3].selected ? 'round' : 'one-way',
      depDate: submitValue[5].value,
      returnDate: submitValue[6].value,
    };

    const flights = await httpService(this.apiPath, this.initFetch('post', new SearchRequest(body)));
    console.log(flights);


    // try {
    //   const { addEvent } = this.props;
    //   const res = await fetch(this.apiPath, this.initFetch('POST', submitValue));
    //   const event = await res.json();
    //   addEvent(event);
    // } catch (err) {
    //   console.error(err);
    // }
  }

  render() {
    return (
      <Content maxwidth="1112px" breakAt="768px" contentAlign="start" contentDirection="row">
        <div className="slide flex flex-col flex-ct">
          <h1>Welcome to miniKiwi!</h1>
          <h3>Choose to travel responsibly with us...</h3>
          <form className="form" onSubmit={this.handleFormSubmit}>
            <Content maxwidth="1024px" breakAt="768px" contentAlign="start" contentJustify="space-evenly" contentDirection="row">
              <div className="formBlob">
                <div className="input-row">
                  <label htmlFor="cabin-select">Cabin</label>
                  <select id="cabin-select">
                    <option value="eco">Economy</option>
                    <option value="business">Business</option>
                  </select>
                </div>
                <div className="input-row">
                  <label htmlFor="cityFrom">From</label>
                  <input type="text" id="cityFrom" />
                </div>
                <div className="input-row">
                  <label htmlFor="cityFrom">To</label>
                  <input type="text" id="cityTo" />
                </div>
              </div>
              <div className="formBlob">
                <div className="input-row">
                  <input type="radio" name="gender" value="male" />
                  Return
                  <input type="radio" name="gender" value="female" />
                  One-way
                </div>
                <div className="input-row">
                  <label htmlFor="dateFrom">Departure</label>
                  <input type="text" id="dateFrom" />
                </div>
                <div className="input-row">
                  <label htmlFor="returnFrom">Return</label>
                  <input type="text" id="returnFrom" />
                </div>
              </div>
            </Content>
            <div className="flex flex-cc">
              <button type="submit">Search options...</button>
            </div>
          </form>
        </div>
        <div className="slide" id="slide-1" />
        <style jsx>
          {`
            .slide {
              width: 100%;
              height: 400px;
            }
            .rel {
              position: relative;
            }
            #slide-1 {
              background-image: url('/static/undraw_new_ideas_jdea.svg');
              background-repeat: no-repeat;
              background-position: right bottom;
              background-size: contain;
            }
            .form {
              position: absolute;
              top: 400px;
              left: 0;
              width: 100%;
            }
            .formBlob {
              min-width: 340px;
              background: white;
              border-radius: 6px;
              box-shadow: 0 4px 8px -4px #0002;
              padding: 2em;
              margin-bottom: 1.5em;
            }
            .input-row {
              margin-bottom: .65em;
            }
            label {
              display: block;
              font-size: 10px;
              text-transform: uppercase;
              font-weight: 600;
              color: var(--accent-color);
              padding-left: .65em;
              margin-bottom: -.15em;
            }
            select {
              border: none;
              outline: none;
              background: transparent;
              font-weight: 600;
            }
            input[type="text"] {
              border: 1px solid #bbf;
              font-size: inherit;
              padding: 8px;
              width: 100%;
              border-radius: 6px;

            }
          `}
        </style>
      </Content>
    );
  }
}

export default Index;
