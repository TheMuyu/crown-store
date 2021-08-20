import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import './CollectionPreview.scss'

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items
                        .slice(0, 4)
                        .map(({id, ...itemProps}) => (
                            <CollectionItem key={id} {...itemProps} />
                        ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview
