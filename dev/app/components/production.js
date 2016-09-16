/**
 * Created by pie on 2016-9-16.
 */
import React, {Component, PropTypes} from 'react';
import {Card} from 'antd';
import ProductionConfig from 'data/ProductionConfig';

export default class Production extends Component {
    render() {
        const cardBody = ProductionConfig.Card.data.map((item, index)=>
            <Card className="custom-card" title={item.title} key={index}>
                <p>{item.type}</p>
                <p>{item.interest}</p>
                <p>{item.desc}</p>
            </Card>
        );

        return (
            <div className="production-wrapper">
                <div className="section-container">
                    {cardBody}
                </div>
            </div>
        );
    }
}
