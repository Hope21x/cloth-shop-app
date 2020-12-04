import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.styles.scss';
import {connect} from 'react-redux';
import {selectSections} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';



const Directory = ({selectSections}) => (
  <div className= 'directory-menu'>
        {
            selectSections.map(({id, ...otherSectionProps}) => (
                <MenuItem key= {id} {...otherSectionProps}/>
            ))
        }
    </div>
);
 

    



const mapStateToProps = createStructuredSelector({
  selectSections
});
export default connect(mapStateToProps,null)(Directory);

  
    
            
   
    

          