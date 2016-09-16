import React, { Component, PropTypes } from 'react';
import { Card,Col,Row } from 'antd';

const TeamData = [
    {
        name: '蔡恒进',
        position: '技术顾问',
        job: '提供软件设计中的技术指导，为整体设计指明方向。',
        advantage: '拥有多年实战经验及极强的洞察力。'
    },
    {
        name: '欧阳彤林',
        position: '创业项目总负责人，理论部门负责人',
        job: '负责整体工作的协调，人员安排及任务给定。重点负责AIM产品部分的设计和构建。参与构建理论框架，负责中期项目报告、商业计划书的整体撰写。',
        advantage: '擅长宏观把握，熟知相关金融学理论知识，有较强的文书写作能力。'
    },
    {
        name: '傅永健',
        position: '技术部门负责人',
        job: '深度增强学习股指策略的技术实现总设计师。',
        advantage: '既有多年代码经验、项目经验，对深度增强学习有较为深入的理论学习。'
    },
    {
        name: '解海天',
        position: '理论顾问',
        job: '深度增强学习投资策略的理论总设计师。',
        advantage: '数理金融背景，擅长数学模型的构造。较强的计算机编写功底，拥有深厚的金融知识底蕴及敏锐的市场嗅觉。'
    },
    {
        name: '周文宇',
        position: '理论组成员',
        job: '参与构建理论框架，负责中期项目报告、商业计划书的整体撰写。',
        advantage: '有着扎实的金融理论基础及编写代码的能力，经济学基础扎实，擅长预测分析，有一定的实战经验和较强的文书写作能力。'
    },
    {
        name: '吴小曼',
        position: '理论组成员',
        job: '主要负责分析产品市场现状，与同类产品进行比较得出产品优势。',
        advantage: '有着扎实的金融理论基础及编写代码的能力。擅长进行产品需求分析，对市场有自己独到的见解。'
    },
    {
        name: '刘天威',
        position: '项目组成员',
        job: '负责项目的技术实现部分及技术文档的写作。',
        advantage: '学习能力较强，对代码和工程有较高的掌握度。'
    },
    {
        name: '李云',
        position: '项目组成员',
        job: '负责项目的APP技术实现部分及视频的录制。',
        advantage: '学习能力较强，对代码和工程有较高的掌握度。'
    },
    {
        name: '甄怡',
        position: '项目组成员',
        job: 'APP美工设计、商业计划书的页面排版。',
        advantage: '具有一定的审美设计水平，拥有相关设计制作经验。'
    },
    {
        name: '崔鹏蔚',
        position: '项目组成员',
        job: '负责项目的APP技术实现部分及技术文档的写作。',
        advantage: '扎实的计算机与金融双学位背景。'
    },
    {
        name: '黄慧娟',
        position: '项目组成员',
        job: '项目前端的技术顾问。',
        advantage: '项目经验丰富，熟悉各种语言的编写。'
    },
    {
        name: '刘佳派',
        position: '技术顾问',
        job: '项目组成员',
        advantage: '项目经验丰富，熟悉各种语言的编写。'
    },
    {
        name: '刘承川',
        position: 'web端设计负责人',
        job: '负责所有web端的编写和设计。',
        advantage: '熟悉前端项目开发'
    }
];

export default class Team extends Component {
    render() {
        return (
            <div className="team-wrapper">
                <ul>
                  {
                    TeamData.map((item, idx) =>
                      <li key={idx}>
                        <Card title={item.name} bordered={false}>
                            {
                                //    <div className="custom-image">
                                //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                //   </div>
                            }
                            <div className="custom-card">
                                <p>职务：{item.position}</p>
                                <p>分工：{item.job}</p>
                                <p>优势：{item.advantage}</p>
                            </div>
                        </Card>
                      </li>)
                  }
                </ul>
            </div>
        );
    }
}
