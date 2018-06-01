export default function PackageItem(props) {
  const {
    versionnum, versioncontent, packagecode, packageSuccess,
  } = props;
  return (
    <div>
      <div className="versionCotent" >{versioncontent}</div>
      <div className="packageCode" >
        <div>编译</div>
        <div>{packagecode}</div>
      </div>
      <div className="status" >
        <div>状态</div>
        <div>{packageSuccess ? '成功' : '失败' }</div>
      </div>
      <div className="versionnum" >
        {versionnum}
      </div>
    </div>
  );
}
