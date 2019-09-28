import React, { Component } from 'react'
import InputField from "@kiwicom/orbit-components/lib/InputField";
// import AirportInput from 'airport-autocomplete-js';
// import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import '../style.css'
// import Fuse from "fuse.js";


class PortFields extends Component {
  constructor() {
    super();
    this.state = {
      airportName1: '',
      airportName2: ''
    }
    console.log('stateThing', this.state);
  }
  

//     options = {
//     shouldSort: true,
//     threshold: 0.4,
//     maxPatternLength: 32,
//     keys: [{
//       name: 'iata',
//       weight: 0.5
//     }, {
//       name: 'name',
//       weight: 0.3
//     }, {
//       name: 'city',
//       weight: 0.2
//     }]
//   };

//    fuse = new Fuse(AirportInput, this.options)


//  wrap = $('<div>')
//   .addClass('autocomplete-wrapper')
//   .insertBefore(ac)
//   .append(ac);

//  list = $('<div>')
//   .addClass('autocomplete-results')
//   .on('click', '.autocomplete-result', function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     selectIndex($(this).data('index'));
//   })
//   .appendTo(wrap);


//   clearResults() {
//     results = [];
//     numResults = 0;
//     list.empty();
//   }
  
//   selectIndex(index) {
//     if (results.length >= index + 1) {
//       ac.val(results[index].iata);
//       clearResults();
//     }  
//   }

//    search(e) {
//     if (e.which === 38 || e.which === 13 || e.which === 40) {
//       return;
//     }
    
//     // if (ac.val().length > 0) {
//     //   results = _.take(fuse.search(ac.val()), 7);
//     //   numResults = results.length;
      
//     //   var divs = results.map(function(r, i) {
//     //       return '<div class="autocomplete-result" data-index="'+ i +'">'
//     //            + '<div><b>'+ r.iata +'</b> - '+ r.name +'</div>'
//     //            + '<div class="autocomplete-location">'+ r.city +', '+ r.country +'</div>'
//     //            + '</div>';
//     //    });
      
//     //   selectedIndex = -1;
//     //   list.html(divs.join(''))
//     //     .attr('data-highlight', selectedIndex);
  
//     // } else {
//     //   numResults = 0;
//     //   list.empty();
//     // }
//   }
  
//    onKeyDown(e) {
//     // switch(e.which) {
//     //   case 38: // up
//     //     selectedIndex--;
//     //     if (selectedIndex <= -1) {
//     //       selectedIndex = -1;
//     //     }
//     //     list.attr('data-highlight', selectedIndex);
//     //     break;
//     //   case 13: // enter
//     //     selectIndex(selectedIndex);
//     //     break;
//     //   case 9: // enter
//     //     selectIndex(selectedIndex);
//     //     e.stopPropagation();
//     //     return;
//     //   case 40: // down
//     //     selectedIndex++;
//     //     if (selectedIndex >= numResults) {
//     //       selectedIndex = numResults-1;
//     //     }
//     //     list.attr('data-highlight', selectedIndex);
//     //     break;
  
//     //   default: return; // exit this handler for other keys
//     // }
//     // e.stopPropagation();
//     // e.preventDefault(); // prevent the default action (scroll / move caret)
//   }

  componentDidMount() {
    // AirportInput("from");
    // AirportInput("to");
  }

  handleChange = (event) => {
    // AirportInput("from");
    // AirportInput("to");
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log('the state: ',this.state);
  }

  render() {
    return (
      <>

        {/* from field */}
        <InputField
          size="small"
          type="text"
          name="airportName1"
          value={this.state.airportName1}
          label="From"
          required={true}
          onChange={this.handleChange}
          id="from"
        />

        {/* To field */}
        <InputField
          size="small"
          type="text"
          name="airportName2"
          value={this.state.airportName2}
          label="To"
          required={true}
          onChange={this.handleChange}
            id="to"
        />

      </>
    )
  }
}

export default PortFields;
