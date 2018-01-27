import React, { Component } from 'react';

class SubFeatures extends Component {
    componentWillMount() {
      const { subfeature } = this.props;

        if (subfeature.presence) {
            this.setState({ subfeaturesPresence: true });
        }
        if (subfeature.subfeatures.length > 0) {
            this.setState({ showSubFeatures: true });
        }
    }

 state = {
  subfeaturesPresence: false,
  showSubFeatures: false,
  viewSubFeatures: false,
 }


    viewMore() {
        this.setState({
            viewSubFeatures: true,
            showingSubFeatures: true
        });
    }

    renderSubs() {
        const { subfeature } = this.props;
        if (subfeature.subfeatures.length > 0) {
            return subfeature.subfeatures.map(sub =>
                (<li className = "subFeature-li"> { sub.title } </li>));
              }
            }

    updateIcon() {
        this.setState({
            viewSubFeatures: false,
            showingSubFeatures: false
        });
    }

    render() {


        const { viewSubFeatures, showSubFeatures, showingSubFeatures, subfeaturePresent, subfeaturePresence } = this.state;
        const { subfeature } = this.props

        const renderSubFeatures = (viewSubFeatures) ? this.renderSubs() : "";
        const icon = (showingSubFeatures) ? (<i className="fa fa-minus" onClick={() => this.updateIcon()} />):
                                            (<i className="fa fa-plus" onClick={() => this.viewMore()} />);

        const subFeatureIcon = (showSubFeatures) ? icon : "";

        const presence = (subfeaturePresence) ? (<li className="presentFeature"> {subfeature.title} {subFeatureIcon} </li>):

                        (<li className = "absentFeature"> {subfeature.title} {subFeatureIcon} </li>);

        return (
                  <div className="subFeature-div">
                    {presence}
                    {renderSubFeatures}
                  </div>
        );
    }
}
export default SubFeatures;
