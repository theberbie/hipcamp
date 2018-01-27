import React, {Component} from 'react';
import FEATURES from './camp_features';
import FeatureDetail from './FeatureDetail';

class Features extends Component {

    renderFeatures() {
        return FEATURES.map((feature, i) =>
            <FeatureDetail key={i} feature={feature}/>
        );
    }

    render() {
        return (
            <div className="features" >
                <h1 className="feature-h1"> Amenities </h1>
                <ul className = "features-ul">
                    <li>{ this.renderFeatures() } </li>
                </ul>
            </div>
        );
    }
}

export default Features;
