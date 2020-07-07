import React from 'react';
import TrendingProductsSum from './TrendingProductsSum';

const TrendingProducts = ({products}) => {
    return (
        <div className="row">
            { products && products.map(product => {
                return (
                    <TrendingProductsSum product={product} key={product.id} />
                );
            }) }
        </div>
    );
}

export default TrendingProducts;