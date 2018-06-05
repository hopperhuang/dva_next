export default function DeployItem({ name, ip }) {
  return (
    <div className="deployItemContainer" >
      <div className="nodeName" >{name}</div>
      <div className="privateIp" >内网IP:&nbsp;{ip}</div>
      {/* <div>
        <div>当前版本</div>
        <div>{version}</div>
      </div> */}
      <style jsx>{`
        .deployItemContainer {
            background: #ffffff;
            margin-top: 20px;
            box-sizing: border-box;
            padding-bottom: 12px;
        }
        .nodeName {
            background: #2170FF;
            font-size: 30px;
            color: #ffffff;
            letter-spacing: 0.64px;
            width:332px;
            height: 56px;
            line-height: 56px;
            text-align: center;
            vertical-align: middle;
            border-bottom-right-radius: 28px;
        }
        .privateIp {
            font-size: 28px;
            color: #666666;
            letter-spacing: 0.52px;
            margin-top: 24px;
            margin-left: 32px;
        }
      `}
      </style>
    </div>
  );
}
