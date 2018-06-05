import { NavBar, Icon, Tabs } from 'antd-mobile';
import React from 'react';
import checkServer from '../../utils/checkServer';
import PackageItem from './components/packageItem';
import DeployItem from './components/deployItem';

const tabs = [
  { title: '编译打包' },
  { title: '生产环境部署' },
];

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
    const {
      servicename, companyId, packageInfoData, deployInfoData,
    } = service;
    const { height } = this.state;
    return (
      <div className="serviceContainer" style={height > 0 ? { minHeight: `${height}px` } : {}} >
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => { goBackToCompanyById(companyId); }}
        >{servicename}
        </NavBar>
        <div className="serviceTabbarContainer">
          <Tabs
            tabs={tabs}
            initialPage={0}
            // swipeable={false}
            // useOnPan={false}
            // onChange={(tab, index) => { console.log('onChange', index, tab); }}
            // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          >
            <div className="packageContent" >
              {packageInfoData.map(data =>
                (<PackageItem
                  key={data.versionid}
                  versionnum={data.versionnum}
                  versioncontent={data.versioncommit}
                  packagecode={data.versiondepgithash}
                  packageSuccess={data.versionissuccessful}
                />))}
            </div>
            <div className="deploycontent" >
              {deployInfoData.map(data => (
                <DeployItem
                  key={data.id}
                  name={data.nodename}
                  ip={data.ip_private}
                />))}
            </div>
          </Tabs>
        </div>
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
            .serviceTabbarContainer {
              width: 100%;
              :global(.am-tabs-default-bar-tab) {
                font-size: 30px;
                height: 87px;
                line-height: 87px;
                padding: 16px;
                color: #2E3234;
              }
              :global(.am-tabs-default-bar-tab-active) {
                color: #2372FF;
              }
              :global(.am-tabs-default-bar-underline) {
                border: 2px solid #2372FF;
              }
              :global(.am-tabs-pane-wrap) {
                overflow-x: hidden;
              }
            }
        `}
        </style>
      </div>
    );
  }
}

export default ServiceRoute;
