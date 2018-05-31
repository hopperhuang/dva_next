import generateUrl from '../../utils/generateUrl';
import BottomTabbarLayout from '../../components/BottomTabbarLayout';

const url = '/static/image/mine_head_bg@2x.png';
const avatar = '/static/image/mine_profile@2x.png';
const bgUrl = generateUrl(url);
const avatarUrl = generateUrl(avatar);

function InfoRoute(props) {
  const { info, logout } = props;
  const { name, nickname } = info;
  return (
    <div className="infoContainer" >
      <div className="backgourndImage">
        <img src={bgUrl} alt="bgimage" />
      </div>
      <div className="info" >
        <div className="avatar">
          <img src={avatarUrl} alt="avatar" />
        </div>
        <div className="nickname" >{nickname}</div>
        <div className="name" >{name}</div>
      </div>
      <div className="logout" onClick={logout} >
        退出登录
      </div>
      <style jsx>{`
        .infoContainer {
          width: 100%;
        }
        .backgourndImage {
          width: 100%;
          height: 470px;
          img {
            width: 100%;
            height: auto;
          }
        }
        .info {
          width: 190px;
          margin: -95px auto 394px;
        }
        .avatar {
          width: 100%;
          height: auto;
          img {
            width: 100%;
            height: auto;
          }
        }
        .nickname {
          margin-top: 32px;
          text-align: center;
          font-family: PingFangSC-Medium;
          font-size: 40px;
          color: #2E3234;
l         etter-spacing: 0.86px;
        }
        .name {
          margin-top: 10px;
          text-align: center;
          font-family: PingFangSC-Medium;
          font-size: 32px;
          color: #2E3234;
          letter-spacing: 0.68px;
        }
        .logout {
          width: 654px;
          height: 96px;
          line-height: 96px;
          font-size: 32px;
          letter-spacing: 0.6px;
          text-align: center;
          vertical-align: middle;
          background-color: #2372FF;
          color: #FFFFFF;
          border-radius: 60px;
          margin: 0 auto;
        }
      `}
      </style>
    </div>
  );
}

export default BottomTabbarLayout(InfoRoute);
