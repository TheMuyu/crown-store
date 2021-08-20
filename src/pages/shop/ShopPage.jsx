import React, { useState } from 'react'
import './ShopPage.scss'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'

const ShopPage = () => {
    const [collections, setCollections] = useState(SHOP_DATA)
    return (
        <div className='shop-page'>
            <h2>Collections</h2>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }            
        </div>
    )
}

export default ShopPage
