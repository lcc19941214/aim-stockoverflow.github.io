import React, { Component, PropTypes } from 'react';
import { Carousel, Tabs, Icon } from 'antd';

const TabPane = Tabs.TabPane;

const CarouselData = [
  {
    "title": "首页轮播图1",
    "alt": "eg-1",
    "id": 1,
    "src": require('images/slides/slide_1.jpg')
  },
  {
    "title": "首页轮播图2",
    "alt": "eg-2",
    "id": 2,
    "src": require('images/slides/slide_2.jpg')
  }
];
const ContentData = [
  // content_1
  {
    headline: {
      'title': '智能数据分析，不断扩大策略的收益性',
      'description': '基于AIM深度增强学习投资策略'
    },
    items: [
      {
        'title': '大数据分析',
        'description': '人工智能大数据分析实时瞄准捕捉市场每一个收益机会',
        'icon': 'cloud-upload-o'
      },
      {
        'title': '数据回测',
        'description': '超500支个股和50ETF历史数据回测，实力无需置疑',
        'icon': 'clock-circle-o'
      },
      {
        'title': '高收益率',
        'description': '年化收益最高达42%，远超行业平均水平',
        'icon': 'line-chart'
      },
      {
        'title': '机器学习',
        'description': '深度学习+增强学习合理配置风险与收益，开启量化投资全新时代',
        'icon': 'desktop'
      },
      {
        'title': '算法优化',
        'description': '后台算法实时优化，灵活应对未知的市场波动',
        'icon': 'code'
      },
      {
        'title': '财富保障',
        'description': '极端情况人工介入，AIM为您的财富保驾护航',
        'icon': 'check-circle-o'
      },
      {
        'title': '自由投资策略',
        'description': '起投金额灵活自由，由您自主选择投资策略，全新私人化投资体验',
        'icon': 'appstore-o'
      },
      {
        'title': '实时收益',
        'description': '收益走势透明可查，实时收益了然于胸，免您后顾之忧',
        'icon': 'pay-circle-o'
      },
      {
        'title': '投资服务',
        'description': '独立客户现在加入即享三个月零成本优质投资服务；机构客户现在加入即享一年零成本优质投资服务',
        'icon': 'customerservice'
      },
    ]
  },
  // content_2
  {
    headline: {
      'title': 'AIM提供自由搭配的产品策略',
      'description': '帮您捕捉市场每一个收益机会'
    },
    items: [
      {
        'title': 'Shooter【旗舰款】',
        'category': '平衡型',
        'description': 'AIM主推策略，合理平衡风险与收益，不定期开放',
        'feat': '25.10%',
        'img': require('images/home/content_2/content_2_01.png') 
      },
      {
        'title': 'Adventurer',
        'category': '激进型',
        'description': 'AIM王牌策略，收益远超行业平均水平，风险偏好者专属策略',
        'feat': '41.65%',
        'img': require('images/home/content_2/content_2_02.png') 
      },
      {
        'title': 'Conservative',
        'category': '谨慎型',
        'description': '低风险稳妥性策略，定期开放，限额发售',
        'feat': '12.30%',
        'img': require('images/home/content_2/content_2_03.png') 
      }
    ]
  },
];

export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="slide-wrapper">
          <div className="m-slide">
            <Carousel autoplay>
              {
                CarouselData.map((item, index) =>
                  <div key={index}>
                    <img src={item.src} alt={item.alt}/>
                  </div>
                )
              }
            </Carousel>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="content content_1">
            <div className="headline">
              <h1>{ContentData[0].headline.title}</h1>
              <p>{ContentData[0].headline.description}</p>
            </div>
            <ul className="items">
              {
                ContentData[0].items.map((item, idx) =>
                  <li key={idx} className="item">
                    <div className="icon">
                      <Icon type={item.icon} />
                    </div>
                    <div className="text">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </li>)
              }
            </ul>
          </div>
          <div className="content content_2">
            <div className="headline">
              <h1>{ContentData[1].headline.title}</h1>
              <p>{ContentData[1].headline.description}</p>
            </div>
            <div className="tablist">
              <Tabs defaultActiveKey="0">
                {
                  ContentData[1].items.map((item, idx) => (
                    <TabPane tab={item.category} key={idx}>
                      <div className="item">
                        <div className="text">
                          <h2>{item.title}</h2>
                          <p className="description">{item.description}</p>
                          <span className="feat">年化收益：{item.feat}</span>
                        </div>
                        <div className="img">
                          <img src={item.img} alt={item.title} />
                        </div>
                      </div>
                    </TabPane>
                  ))
                }
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
