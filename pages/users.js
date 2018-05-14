
import Router from 'next/router';
import { Button } from 'antd-mobile';

export default function () {
  return (
    <div className="user" >
      here is user
      <br />
      <Button onClick={() => Router.push('/')} >
        go back to index
      </Button>
      <style jsx>{`
        .user {
          font-size: 28px;
          :global(.am-button) {
            font-size: 26px;
          }
        }
      `}
      </style>
    </div>
  );
}
