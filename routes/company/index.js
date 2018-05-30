import { NavBar, Icon } from 'antd-mobile';
import React from 'react';
import checkServer from '../../utils/checkServer';
import ServiceItem from './components/serviceItem';

export default class CompanyRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }
  componentDidMount() {
    console.log('set');
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
    const { company, goBackToHomePage, seeServiceById } = this.props;
    const { height } = this.state;
    // console.log(height);
    const { companyName, services } = company;
    return (
      <div className="companyContainer" style={height > 0 ? { minHeight: `${height}px` } : {}} >
        <div className="companyNavibar" >
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => goBackToHomePage()}
          >{companyName}
          </NavBar>
        </div>
        {services.map(service =>
          (<ServiceItem
            key={service.serviceid}
            servicename={service.servicename}
            user={service.user}
            arrowOnClick={() => { seeServiceById(service.serviceid); }}
          />))}
        <style jsx>{`
            .companyContainer {
                width: 100%;
                min-height: 1294px;
                background-color: #FBFBFB;
            }
            .companyNavibar {
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

// export default function CompanyRoute(props) {
//   const { company, goBackToHomePage } = props;
//   const { companyName } = company;
//   return (
//     <div className="companyContainer" >
//       <div className="companyNavibar" >
//         <NavBar
//           mode="light"
//           icon={<Icon type="left" />}
//           onLeftClick={() => goBackToHomePage()}
//     //       rightContent={[
//     //         <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
//     //   ]}
//         >{companyName}
//         </NavBar>
//       </div>
//       <style jsx>{`
//         .companyContainer {
//             width: 100%;
//             min-height: 1294px;
//             background-color: #FBFBFB;
//         }
//         .companyNavibar {
//             :global(.am-navbar) {
//                 height: 90px;
//             }
//             :global(.am-navbar-title) {
//                 font-size: 36px;
//             }
//             :global(.am-icon-md ) {
//                 width: 44px;
//                 height: 44px;
//                 color: #040404;
//             }
//         }
//       `}
//       </style>
//     </div>
//   );
// }
