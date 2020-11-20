import React from 'react';
import shop_data from './shop_data.js';
import CollectionPreview from '../../preview/collection-preview';


class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections: shop_data
        };
    }


    render(){
        const {collections} = this.state;
        return(
            <div className= 'shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                } 
                
            </div>
        )
    }
}

export default ShopPage;