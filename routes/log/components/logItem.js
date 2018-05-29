import UpdateContent from './updateContent';
import generateUrl from '../../../utils/generateUrl';

const tagIconUrl = generateUrl('/static/image/tag@2x.png');


export default function LogItem(props) {
  const { time, version, updates } = props;
  return (
    <div className="logItemContainer" >
      <div className="time-date" >
        <div className="version" >{version}</div>
        <div className="time">{time}</div>
      </div>
      <div className="updateContents">
        {updates.map(update => <UpdateContent key={update.id} content={update.content} />)}
      </div>
      <div className="tagIcon" >
        <img src={tagIconUrl} alt="icon" />
      </div>
      <style jsx>{`
      .logItemContainer {
        margin-bottom: 28.4px;
        position: relative;
      }
      .logItemContainer:last-child {
        margin-bottom: 0;
      }
        .version {
            font-family: PingFang-SC-Medium;
            font-size: 44px;
            color: #2E3234;
            letter-spacing: 0;
        }
        .time {
            font-family: PingFang-SC-Medium;
            font-size: 24px;
            color: #9A9D9D;
            letter-spacing: 0;
        }
        .time-date {
            width: 100%;
            box-sizing: border-box;
            padding-left: 31px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .updateContents {
            width: 100%;
            padding: 22px 0 22px 31px;
            border-left: 2px dashed #9A9D9D;
            box-sizing: border-box;
        }
        .tagIcon {
            position: absolute;
            top: 10px;
            left: -16px;
            width: 32px;
            height: 32.4px;
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
