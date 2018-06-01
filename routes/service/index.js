import { NavBar, Icon } from 'antd-mobile';
import React from 'react';
import checkServer from '../../utils/checkServer';

class ServiceRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }
  componentDidMount() {
    // console.log('set');
    const isServer = checkServer();
    if (!isServer) {
      // eslint-disable-next-line
      this.setState({
        // eslint-disable-next-line
        height: document.documentElement.clientHeight,
      });
    }
  }
  render() {
    const { service, goBackToCompanyById } = this.props;
    const { servicename, companyId } = service;
    const { height } = this.state;
    return (
      <div className="serviceContainer" style={height > 0 ? { minHeight: `${height}px` } : {}} >
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => { goBackToCompanyById(companyId); }}
        >{servicename}
        </NavBar>
        <style jsx>{`
            .serviceContainer {
                width: 100%;
                min-height: 1294px;
                background-color: #FBFBFB;
            }
            .serviceContainer {
                :global(.am-navbar) {
                    height: 90px;
                }
                :global(.am-navbar-title) {
                    font-size: 36px;
                }
                :global(.am-icon-md ) {
                    width: 44px;
                    height: 44px;
                    color: #040404;
                }
            }
        `}
        </style>
      </div>
    );
  }
}

export default ServiceRoute;
