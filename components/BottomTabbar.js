import React from 'react';
import { TabBar } from 'antd-mobile';
import Router from 'next/router';
import generateUrl from '../utils/generateUrl';

function generateIconStyle(backgroundUrl) {
  return {
    width: '0.48rem',
    height: '0.48rem',
    background: `url(${backgroundUrl}) center center /  0.48rem 0.48rem no-repeat`,
  };
}

const indexSelectedIcon = generateUrl('/static/image/icon_hone@2x.png');
const indexIcon = generateUrl('/static/image/HOME@2x.png');
const logIcon = generateUrl('/static/image/icon_no_rizhi@2x.png');
const logSelectedIcon = generateUrl('/static/image/icon_click_rizhi@2x.png');
const myinfoIcon = generateUrl('/static/image/icon_my@2x.png');
const myinfoSelectedIcon = generateUrl('/static/image/myinfo@2x.png');

class BottomTabbar extends React.Component {
  constructor(props) {
    super(props);
    this.ifTargetAndCurrentSame = this.ifTargetAndCurrentSame.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }
  ifTargetAndCurrentSame(targetUrl) {
    const { pathname } = this.props;
    return targetUrl === pathname;
  }
  navigateTo(targetUrl) {
    const same = this.ifTargetAndCurrentSame(targetUrl);
    if (!same) {
      Router.push(targetUrl);
    }
  }
  render() {
    const { pathname } = this.props;
    return (
      <div className="custtomTabbar" >
        <TabBar>
          <TabBar.Item
            key="index"
            title="首页"
            icon={<div style={generateIconStyle(indexIcon)} />}
            selectedIcon={<div style={generateIconStyle(indexSelectedIcon)} />}
            selected={pathname === '/' || pathname === '/index'}
            onPress={() => {
                this.navigateTo('/');
              }}
          />
          <TabBar.Item
            key="log"
            title="更新日志"
            icon={<div style={generateIconStyle(logIcon)} />}
            selectedIcon={<div style={generateIconStyle(logSelectedIcon)} />}
            selected={pathname === '/log'}
            onPress={() => {
                this.navigateTo('/log');
              }}
          />
          <TabBar.Item
            key="myinfo"
            title="我的"
            icon={<div style={generateIconStyle(myinfoIcon)} />}
            selectedIcon={<div style={generateIconStyle(myinfoSelectedIcon)} />}
            selected={pathname === '/info'}
            onPress={() => {
                this.navigateTo('/info');
              }}
          />
        </TabBar>
        <style jsx>{`
          .custtomTabbar {
            :global(.am-tab-bar-bar) {
              height: 98px;
            }
            :global(.am-tab-bar-bar .am-tab-bar-tab-title) {
              font-size: 22px;
              margin: 8px 0 0 0;
            }
          }
        `}
        </style>
      </div>
    );
  }
}

export default BottomTabbar;

