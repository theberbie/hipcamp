import React, {Component}from 'react';
import SubFeatures from './SubFeatures';

class FeatureDetail extends Component {

  componentWillMount() {
    const { feature } = this.props;
      if (feature.presence) {
          this.setState({ featurePresence: true });
      }
      if (feature.subfeatures.length > 0) {
          this.setState({ subfeaturePresent: true });
      }
  }

   state = {
    subfeaturePresent: false,
    presence: false,
    showSubFeatures: false
   }

    viewMore() {
        this.setState({ showSubFeatures: true });
    }

    renderSubFeatures() {
      const { feature } = this.props;
        return feature.subfeatures.map(subfeature =>
            <SubFeatures key = { subfeature.title } subfeature = { subfeature } /> );
    }

    updateIcon() {
        this.setState({ showSubFeatures: false });
    }

    render() {
        const { showSubFeatures, subfeaturePresent, featurePresence} = this.state;
        const { feature } = this.props;
        const subFeatures = (showSubFeatures) ? this.renderSubFeatures() : subFeatures
        const icon = (showSubFeatures) ? (<i className="fa fa-minus" style={{textDecoration: 'none'}}onClick = { () => this.updateIcon()} /> ) :
                                         (<i className="fa fa-plus" onClick = { () => this.viewMore()}/>);

        const subFeatureIcon = (subfeaturePresent) ? icon : subFeatureIcon;

        const presence = (featurePresence) ? (<li className='presentFeature'> {feature.title} { subFeatureIcon }</li>) :
                                             (<li className='absentFeature'> {feature.title} { subFeatureIcon } </li>);

        return (
                <div className="feature-div">
                  { presence } { subFeatures }
                </div>
        );
    }
}

export default FeatureDetail;
