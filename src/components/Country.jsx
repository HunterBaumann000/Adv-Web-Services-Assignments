import React, { Component } from 'react';
import Medal from './Medal';
import Card from '@mui/material/Card';

class Country extends Component {

  getMedalsTotal(country, medals) {
    let totalMedals = 0;

    medals.forEach(medal =>
         { totalMedals += country[medal.name];
    });

    return totalMedals;
  }
  
  render() { 
    const { country, medals, addMedalCount, decreaseMedalCount } = this.props;

    return (
    <Card style={{paddingTop: '50px', paddingBottom: '80px', paddingRight: '80px', paddingLeft: '80px'}}>
      <div className="country">
        <div className="name">
          <div class="titleFont">
          { country.name }
          </div>
          
          <hr/>
          <span>
            Total Medals Won:  { this.getMedalsTotal(country, medals) }
          </span>
          <hr/>
        </div> 
        { medals.map(medal =>
          <Medal 
            key={ medal.id } 
            country={ country } 
            medal={ medal } 
            addMedalCount={ addMedalCount } 
            decreaseMedalCount={ decreaseMedalCount } />
        ) }
        </div>
    </Card>
      
    );
  }
}

export default Country;