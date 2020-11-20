import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.styles.scss';



class Directory extends React.Component{
  constructor(props){
        super(props);
        this.state = {
            sections: [
                
                    {
                      title: 'hats',
                      imageUrl: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                      id: 1,
                      linkUrl: 'hats'
                    },
                    {
                      title: 'jackets',
                      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                      id: 2,
                      linkUrl: 'jackets'
                    },
                    {
                      title: 'sneakers',
                      imageUrl: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                      id: 3,
                      linkUrl: ''
                    },
                    {
                      title: 'womens',
                      imageUrl: 'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                      size: 'large',
                      id: 4,
                      linkUrl: ''
                    },
                    {
                      title: 'mens',
                      imageUrl: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                      size: 'large',
                      id: 5,
                      linkUrl: ''
                    }
                  
                  
            ]
        };
  }


  render(){
      return(
          <div className= 'directory-menu'>
              {
                  this.state.sections.map(({id, ...otherSectionProps}) => (
                      <MenuItem key= {id} {...otherSectionProps}/>
                  ))
              }
          </div>
      )
  }


}
export default Directory;

  
    
            
   
    

          