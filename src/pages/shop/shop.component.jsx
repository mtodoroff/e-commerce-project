import React,{Component} from 'react';
import SHOP_DATA from './shopData';
import ShowCollection from '../../components/show-collection/show-collection.component';

class ShopPage extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            collections: SHOP_DATA
        };
    }
    render () {
        const {collections} = this.state;
       return  (
       <div className='shop-page'>
           {collections.map(({id,...restOfCollectionProps})=> (  /// rest of collection data from shopData.js
              <ShowCollection key={id} {...restOfCollectionProps} />  
           ))}
       </div>
       )
    }
}

export default ShopPage;