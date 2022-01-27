import React, { Component } from 'react';
import Button from '@mui/material/Button';

class Medal extends Component {
  state = {  }
  render() { 
    const { medal, country, addMedalCount, decreaseMedalCount } = this.props;
    return (
      <div>

        { medal.name } medals
        <br></br>
         <Button variant="outlined" style={{maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px', marginLeft: '1em', marginRight: '1em'}}
          onClick={ () => 
            decreaseMedalCount(country.id, medal.name) 
        }>
          -
        </Button>
        <span class="numberFont">
        {country[medal.name]}
        </span>
        <Button variant="outlined" style={{maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px', marginLeft: '1em', marginRight: '1em'}} 
         onClick={ () => 
          addMedalCount(country.id, medal.name) 
         }>
           +
         </Button>
         <hr/>
      </div>
    );
  }
}

export default Medal;
