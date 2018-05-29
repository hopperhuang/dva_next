import React from 'react';
import BottomTabbarLayout from '../../components/BottomTabbarLayout';
import LogItem from './components/logItem';
import logs from './logData';


class LogRoute extends React.Component {
  render() {
    return (
      <div className="logContainer" >
        <div className="title" >更新日志</div>
        <div className="logs">
          {logs.map(log => (<LogItem
            key={log.version}
            version={log.version}
            time={log.time}
            updates={log.updates}
          />))}
        </div>
        <style jsx>{`
          .logContainer {

          }
          .title {
            font-family: PingFang-SC-Regular;
            font-size: 36px;
            height: 88px;
            line-height: 88px;
            vertical-align: middle;
            color: #121212;
            letter-spacing: 0;
            text-align: center; 
            width: 100%;
            box-shadow: 0 2px 8px 0 rgba(0,0,0,0.03);
          }
          .logs {
              box-sizing: border-box;
              width: 100%;
              padding-left: 61px;
              padding-right: 42px;
              padding-top: 58px;
              padding-bottom: 20px;
              background-color: #FBFBFB;
          }
        `}
        </style>
      </div>
    );
  }
}

export default BottomTabbarLayout(LogRoute);
