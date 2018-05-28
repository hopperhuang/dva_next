import React from 'react';
import BottomTabbarLayout from '../../components/BottomTabbarLayout';
import CompanyItem from './components/item';

const generateUrl = (url) => {
  const urlPrefix = '/static/image/';
  return `${urlPrefix}${url}`;
};
const urlObject = {
  1: 'fancy@2x.png',
  2: 'icon_lechuan@2x.png',
  6: 'icon_qy@2x.png',
  7: 'inno@2x.png',
  8: 'icon_caomei@2x.png',
  9: 'icon_cpc@2x.png',
  10: 'icon_L@2x.png',
  12: 'icon_shi@2x.png',
  13: 'icon_robot@2x.png',
  14: 'icon_anti@2x.png',
  15: 'icon_header@2x.png',
  16: 'icon_shuju@2x.png',
  20: 'icon_weifei@2x.png',
  21: 'icon_you@2x.png',
  22: 'icon_xihu@2x.png',
  25: 'icon_lang@2x.png',
  26: 'icon_huzhong@2x.png',
  27: 'icon_zhang@2x.png',
};

const getUrlFromId = (id) => {
  const url = urlObject[id];
  const picUrl = generateUrl(url);
  return picUrl;
};

class IndexRoute extends React.Component {
  render() {
    const { companies, goToCompany } = this.props;
    // console.log(companies, 'rendered');
    return (
      <div className="container" >
        <div className="title" > 皮皮虾上线发布系统</div>
        <div className="companiesContainer" >
          {companies.map(company => (
            <CompanyItem
              key={company.id}
              itemOnclick={() => { goToCompany(company.id); }}
              pic={getUrlFromId(company.id)}
              name={company.name}
            />))}
        </div>
        <style jsx>{`
          .container {
              width: 100%;
              box-sizing: border-box;
              padding-left: 40px;
          }
          .title {
            margin-top: 79px;
            font-family: PingFang-SC-Bold;
            font-size: 40px;
            color: #505050;
            letter-spacing: 0;
          }
          .companiesContainer {
            margin-top: 82px;
            width: 100%;
            display: flex;
            // justify-content: space-between;
            flex-wrap: wrap;
          }
        `}
        </style>
      </div>
    );
  }
}

export default BottomTabbarLayout(IndexRoute);
