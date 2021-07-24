import React from 'react';
import { compare } from '../../../../../utils/compare';
import shortid from 'shortid';
import { Link } from 'react-router-dom';

function CompareInfo({ title, children }) {
    return (
        <div className="container container-sm">
            <div className="row info">
                <div className="col-md-2 col-2 info-title bold">{title}</div>
                <div className="col-md-10 col-10 info-body">
                    <div className="row info-row">{children}</div>
                    
                </div>
            </div>
        </div>
    );
}

function CompareHeaderInfo({ title, }) {
    return (
        <div className="container container-sm">
            <div className="row info-header">
                <div className="col-md-2 info-title bold">{title}</div>
                <div className="col-md-10 info-body">
                    <div className="row info-row"></div>
                </div>
            </div>
        </div>
    );
}

const itemsToCompare = [
    { item: 'product', title: 'Product', header: true },
    { item: 'desc', title: 'Description' },
    { item: 'type', title: 'Type' },
    { item: 'properties', title: 'Properties', header: true },
    { item: 'brand', title: 'Brand' },
    { item: 'measure', title: 'Measures', header: true },
    { item: 'width', title: 'Width' },
    { item: 'quantity', title: 'Quantity' },
    { item: 'weight', title: 'Weight' },
    { item: 'location', title: 'Location', header: true },
    { item: 'location', title: 'Location' },
];

function CompareBody({ compareBody, activeTab, limit }) {
    return (
        <>
            {itemsToCompare.map(({ item, title, header }) => (
                header ? <CompareHeaderInfo title={title} key={shortid.generate()} /> :
                <CompareInfo title={title} key={shortid.generate()}>
                {compareBody.filter(item => item.subcategory.slug === activeTab).slice(0, limit).map((data, index) => {
                    return index < compare.limit ? (
                    <div
                        className="col-md-3 col-sm-4 col-6 info-item"
                        key={shortid.generate()}
                    >
                        {data[item]}
                    </div>
                    ) : null;
                })}
                </CompareInfo>
            ))}
        </>
    );
}

export default CompareBody;
