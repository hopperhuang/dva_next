import React from 'react';
import BottomTabbar from './BottomTabbar';

export default function BottomTabbarLayout(Com) {
  return class LayoutWithBottomBar extends React.Component {
    render() {
      const { pathname } = this.props;
      return (
        <div className="bottomBarLayoutContainer" >
          <div className="contentArea" >
            <Com {...this.props} />
          </div>
          <div className="bottomBar" >
            <BottomTabbar pathname={pathname} />
          </div>
          <style jsx>{`
          .contentArea {
              width: 100%;
              box-sizing: border-box;
              padding-bottom: 98px; 
          }
          .bottomBar {
              position: fixed;
              bottom: 0;
              width: 750px;
          }
        `}
          </style>
        </div>
      );
    }
  };
}
