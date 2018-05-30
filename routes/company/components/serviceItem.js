import generateUrl from '../../../utils/generateUrl';

const arrowIconSrc = generateUrl('/static/image/jiantou@2x.png');

export default function ServiceItem(props) {
  const { servicename, user, arrowOnClick } = props;
  return (
    <div className="serviceItem" >
      <div className="servername" >服务器名：{servicename}</div>
      <div className="responser" >
        <div className="responserTitle" >负责人:</div>
        <div className="responsers" >
          {user.map(usr => (
            <div className="responserItem" key={usr.id} >
              {usr.name}
            </div>
            ))}
        </div>
      </div>
      <div onClick={arrowOnClick} className="arrowIcon" >
        <img src={arrowIconSrc} alt="arrowIcon" />
      </div>
      <style jsx>{`
        .serviceItem {
            width: 100%;
            box-sizing: border-box;
            padding-right: 22px;
            padding-left: 58px;
            padding-top: 40px;
            padding-bottom: 44px;
            background-color: #ffffff;
            margin-top: 20px;
            position: relative;
        }
        .servername {
            font-family: PingFang-SC-Medium;
            font-size: 28px;
            color: #666666;
            letter-spacing: 0.6px;
        }
        .responser {
            display: flex;
            width: 610px;
            margin-top: 28px;
        }
        .responserTitle {
            font-family: PingFang-SC-Medium;
            font-size: 29px;
            color: #666666;
            letter-spacing: 0.6px;
            line-height: 44px;
            height: 44px;
            vertical-align: middle;
        }
        .responsers {
            display: flex;
            width: 492px;
            flex-wrap: wrap;
        }
        .responserItem {
            margin-left: 16px;
            margin-bottom: 16px;
            font-size: 24px;
            width: 120px;
            height: 44px;
            text-align: center;
            border-radius: 16px;
            background-color: #2372FF;
            color: #FFFFFF;
            box-sizing: border-box;
            padding: 8px 16px;
        }
        .arrowIcon {
            position: absolute;
            right: 22px;
            top: 68px;
            width: 40px;
            img {
                width: 100%;
                height: auto;
            }
        }
      `}
      </style>
    </div>
  );
}
