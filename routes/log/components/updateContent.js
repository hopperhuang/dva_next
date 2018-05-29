export default function UpdateContent(props) {
  return (
    <div className="updateContent" >
      <div>・&nbsp;</div>
      <div>{props.content}</div>
      <style jsx>{`
        .updateContent {
            display: flex;
            font-family: PingFang-SC-Regular;
            font-size: 28px;
            color: #9A9D9D;
            letter-spacing: 0;
            margin-bottom: 12px;
            width: 100%;
        }
        `}
      </style>
    </div>
  );
}
