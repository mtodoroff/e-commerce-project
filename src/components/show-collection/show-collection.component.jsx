import React from 'react';
import './show-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const ShowCollection = ({title,items}) => (
    <div className='show-collection'>
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className='preview'>
                {items
                .filter((item,index) => index < 4)  // show only 4 records from category
                .map(({id ,...restOfProps}) => (
                     <CollectionItem key={id} {...restOfProps} />
                  ))
                }
        </div>    
    </div>
)
export default ShowCollection;