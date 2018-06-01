export default function PackageItem(props) {
  const {
    versionnum, versioncontent, packagecode, packageSuccess,
  } = props;
  return (
    <div className="pkgItemContainer" >
      <div className="versionCotent" >{versioncontent}</div>
      <div className="packageCode" >
        <div className="trans" >编译</div>
        <div className="packageCode_code" >
          {packagecode.length > 0 ? packagecode.slice(0, 6) : '暂无'}
        </div>
      </div>
      <div className="status" >
        <div className="status_title" >状态</div>
        <div className={packageSuccess ? 'pkStatus_success' : 'pkStatus_fail'} >
          {packageSuccess ? '成功' : '失败' }
        </div>
      </div>
      <div className="versionnum" >
        {versionnum}
      </div>
      <style jsx>{`
        .pkgItemContainer {
          width: 100%;
          display: flex;
          position: relative;
          box-sizing: border-box;
          padding: 80px 32px 32px;
          background-color: #ffffff;
          margin-top: 20px;
          justify-content: space-between;
        }
        .versionCotent {
          font-size: 28px;
          color: #666666;
          letter-spacing: 0.52px;
          line-height: 44px;
          width: 286px;
          height: 88px;
          word-break:break-all;
          overflow: hidden;
          text-overflow:ellipsis;
        }
        .trans, .status_title {
          font-size: 24px;
          letter-spacing: 0.46px;
          width: 100%;
          text-align: center;
          margin-bottom: 8px;
        }
        .packageCode {
          width: 128px;
        }
        .packageCode_code {
          font-size: 28px;
          color: #2372FF;
          letter-spacing: 0.52px;
          width: 100%;
          text-align: center;
          height: 48px;
          line-height: 48px;
          border-radius: 24px;
          background: #EAF6FF;
          border: 2px solid #2372FF;
          box-sizing: border-box;
          padding: 0 16px;
          overflow: hidden;
          text-indent: -4px;
        }
        .status {
          width: 90px;
        }
        .pkStatus_success {
          font-family: PingFangSC-Regular;
          font-size: 28px;
          color: #46D171;
          letter-spacing: 0.52px;
          width: 100%;
          height: 48px;
          line-height: 49px;
          text-align: center;
          vertical-align: middle;
          background: #EAFAF0;
          border-radius: 24px;
        }
        .pkStatus_fail {
          font-family: PingFangSC-Regular;
          font-size: 28px;
          color: #FF4A4B;
          letter-spacing: 0.52px;
          width: 100%;
          height: 48px;
          line-height: 49px;
          text-align: center;
          vertical-align: middle;
          background: #FFEDEE;
          border-radius: 24px;
        }
        .versionnum {
          position: absolute;
          left: 0;
          top: 0;
          width: 232px;
          height: 56px;
          line-height: 56px;
          text-align: center;
          vertical-align: middle;
          background: #2170FF;
          font-size: 30px;
          color: #ffffff;
          letter-spacing: 0.64px;
          border-bottom-right-radius: 28px;
        }
      `}
      </style>
    </div>
  );
}
