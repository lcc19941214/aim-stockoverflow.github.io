import React, { Component, PropTypes } from 'react';
import { Card,Col,Row } from 'antd';

export default class Team extends Component {
    render() {

        return (
            <div style={{ background: '#ECECEC', padding: '0px 100px 80px 100px'  }} >
                <Row type="flex" justify="space-around" >
                    <Col span="8">
                        <Card style={{ width: 400}}  title="蔡恒进" bordered={false}>
                            {
                            //    <div className="custom-image">
                             //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                             //   </div>
                            }

                            <div className="custom-card" >
                                <p>职务：技术顾问</p>
                                <p>分工：提供软件设计中的技术指导，为整体设计指明方向。</p>
                                <p>优势：拥有多年实战经验及极强的洞察力。</p>
                            </div>
                        </Card>
                    </Col>
                    <Col span="8">
                        <Card style={{ width: 400}}  title="欧阳彤林" bordered={false}>
                                {
                                    //    <div className="custom-image">
                                    //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                    //   </div>
                                }
                            <div className="custom-card">
                                <p>职务：创业项目总负责人，理论部门负责人</p>
                                <p>分工：负责整体工作的协调，人员安排及任务给定。重点负责AIM产品部分的设计和构建。参与构建理论框架，负责中期项目报告、商业计划书的整体撰写。</p>
                                <p>优势：擅长宏观把握，熟知相关金融学理论知识，有较强的文书写作能力。</p>
                            </div>
                        </Card>
                    </Col>
                    <Col span="8">
                        <Card style={{ width: 400}}  title="傅永健" bordered={false}>
                                {
                                    //    <div className="custom-image">
                                    //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                    //   </div>
                                }
                            <div className="custom-card">
                                <p>职务：技术部门负责人</p>
                                <p>分工：深度增强学习股指策略的技术实现总设计师。</p>
                                <p>优势：既有多年代码经验、项目经验，对深度增强学习有较为深入的理论学习。</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row type="flex" justify="space-around">
                    <Col span="8">
                        <Card style={{ width: 400}}  title="解海天" bordered={false}>
                                {
                                    //    <div className="custom-image">
                                    //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                    //   </div>
                                }
                            <div className="custom-card">
                                <p>职务：理论顾问</p>
                                <p>分工：深度增强学习投资策略的理论总设计师。</p>
                                <p>优势：数理金融背景，擅长数学模型的构造。较强的计算机编写功底，拥有深厚的金融知识底蕴及敏锐的市场嗅觉。</p>
                            </div>
                        </Card>
                    </Col>
                    <Col span="8">
                          <Card style={{ width: 400}}  title="周文宇" bordered={false}>
                                {
                                    //    <div className="custom-image">
                                    //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                    //   </div>
                                }
                            <div className="custom-card">
                                <p>职务：理论组成员</p>
                                <p>分工：参与构建理论框架，负责中期项目报告、商业计划书的整体撰写。</p>
                                <p>优势：有着扎实的金融理论基础及编写代码的能力，经济学基础扎实，擅长预测分析，有一定的实战经验和较强的文书写作能力。</p>
                            </div>
                        </Card>
                    </Col>
                    <Col span="8">
                          <Card style={{ width: 400}}  title="吴小曼" bordered={false}>
                            {
                                //    <div className="custom-image">
                                //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                //   </div>
                            }
                            <div className="custom-card">
                                <p>职务：理论组成员</p>
                                <p>分工：主要负责分析产品市场现状，与同类产品进行比较得出产品优势。</p>
                                <p>优势：有着扎实的金融理论基础及编写代码的能力。擅长进行产品需求分析，对市场有自己独到的见解。</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row type="flex" justify="space-around">
                    <Col span="8">
                          <Card style={{ width: 400}}  title="刘天威" bordered={false}>
                            {
                                //    <div className="custom-image">
                                //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                //   </div>
                            }
                            <div className="custom-card">
                                <p>职务：项目组成员</p>
                                <p>分工：负责项目的技术实现部分及技术文档的写作。</p>
                                <p>优势：学习能力较强，对代码和工程有较高的掌握度。</p>
                            </div>
                        </Card>
                    </Col>
                    <Col span="8">
                          <Card style={{ width: 400}}  title="李云" bordered={false}>
                            {
                                //    <div className="custom-image">
                                //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                //   </div>
                            }
                            <div className="custom-card">
                                <p>职务：项目组成员</p>
                                <p>分工：负责项目的APP技术实现部分及视频的录制。</p>
                                <p>优势：学习能力较强，对代码和工程有较高的掌握度。</p>
                            </div>
                        </Card>
                    </Col>
                    <Col span="8">
                          <Card style={{ width: 400}}  title="甄怡" bordered={false}>
                            {
                                //    <div className="custom-image">
                                //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                //   </div>
                            }
                            <div className="custom-card">
                                <p>职务：项目组成员</p>
                                <p>分工：APP美工设计、商业计划书的页面排版。</p>
                                <p>优势：具有一定的审美设计水平，拥有相关设计制作经验。</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row type="flex" justify="space-around">
                <Col span="8">
                      <Card style={{ width: 400}}  title="崔鹏蔚" bordered={false}>
                        {
                            //    <div className="custom-image">
                            //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                            //   </div>
                        }
                        <div className="custom-card">
                            <p>职务：项目组成员</p>
                            <p>分工：负责项目的APP技术实现部分及技术文档的写作。</p>
                            <p>优势：扎实的计算机与金融双学位背景。</p>
                        </div>
                    </Card>
                </Col>
                <Col span="8">
                      <Card style={{ width: 400}}  title="黄慧娟" bordered={false}>
                        {
                            //    <div className="custom-image">
                            //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                            //   </div>
                        }
                        <div className="custom-card">
                            <p>职务：项目组成员</p>
                            <p>分工：项目前端的技术顾问。</p>
                            <p>优势：项目经验丰富，熟悉各种语言的编写。</p>
                        </div>
                    </Card>
                </Col>
                <Col span="8">
                      <Card style={{ width: 400}}  title="刘佳派" bordered={false}>
                        {
                            //    <div className="custom-image">
                            //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                            //   </div>
                        }
                        <div className="custom-card">
                            <p>职务：项目组成员</p>
                            <p>分工：项目后端技术顾问。</p>
                            <p>优势：项目经验丰富，熟悉各种语言的编写。</p>
                        </div>
                    </Card>
                </Col>
            </Row>
                <Row justify="space-around" >
                    <Col span="8">
                        <Card style={{ width: 400 }}  title="刘承川" bordered={false}>
                            {
                                //    <div className="custom-image">
                                //       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                //   </div>
                            }
                            <div className="custom-card">
                                <p>职务：web端设计负责人</p>
                                <p>分工：负责所有web端的编写和设计。</p>
                                <p>优势：多年的写代码经验和前端设计经验，熟悉各种语言的编写。</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
    );
    }
}
