export default function Item(props) {
  const { pic, itemOnclick } = props;
  return (
    <div className="itemContainer" >
      <div className="imgContainer" onClick={itemOnclick} >
        <img className="itemIcon" alt="icon" src={pic} />
      </div>
      <div className="name" >{props.name}</div>
      <style jsx>{`
          .itemContainer {
              width: 120px;
              margin-right: 62px;
              margin-bottom: 32px;
          }
          .itemContainer:nth-child(4n) {
              margin-right: 0;
          }
          .imgContainer {
              width: 120px;
              height: 120px;
              border-radius: 10px;
              overflow: hidden;
          }
          .itemIcon {
              width: 100%;
              height: auto;
          }
          .name {
            width: 100%;
            font-family: PingFang-SC-Regular;
            margin-top: 10px;
            font-size: 28px;
            color: #505050;
            letter-spacing: 0;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
