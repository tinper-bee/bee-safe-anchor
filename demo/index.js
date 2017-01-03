
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import SafeAnchor from '../src';

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
 *
 * @title 默认锚点
 * @description 基础锚点
 *
 */

 class Demo1 extends Component {
     render(){
     return(
         <div className="anchor-demo">
             <SafeAnchor href="https://bee.tinper.org">默认的锚点</SafeAnchor>
             <SafeAnchor href="https://bee.tinper.org" disabled>不可点击</SafeAnchor>
             <SafeAnchor componentClass="div" href="https://bee.tinper.org">不同的元素标签</SafeAnchor>
         </div>
         )
     }
 }
/**
 *
 * @title 事件锚点
 * @description 在锚点上添加事件
 *
 */

 class Demo2 extends Component {
     handleClick () {
         alert('我要成为海贼王的男人！');
     }
     render(){
     return(
         <div className="anchor-demo">
             <SafeAnchor onClick = { this.handleClick }>事件锚点</SafeAnchor>
         </div>
         )
     }
 }
var DemoArray = [{"example":<Demo1 />,"title":" 默认锚点","code":"/**\r\n *\r\n * @title 默认锚点\r\n * @description 基础锚点\r\n *\r\n */\r\n\r\n class Demo1 extends Component {\r\n     render(){\r\n     return(\r\n         <div className=\"anchor-demo\">\r\n             <SafeAnchor href=\"https://bee.tinper.org\">默认的锚点</SafeAnchor>\r\n             <SafeAnchor href=\"https://bee.tinper.org\" disabled>不可点击</SafeAnchor>\r\n             <SafeAnchor componentClass=\"div\" href=\"https://bee.tinper.org\">不同的元素标签</SafeAnchor>\r\n         </div>\r\n         )\r\n     }\r\n }\r\n","desc":" 基础锚点"},{"example":<Demo2 />,"title":" 事件锚点","code":"/**\r\n *\r\n * @title 事件锚点\r\n * @description 在锚点上添加事件\r\n *\r\n */\r\n\r\n class Demo2 extends Component {\r\n     handleClick () {\r\n         alert('我要成为海贼王的男人！');\r\n     }\r\n     render(){\r\n     return(\r\n         <div className=\"anchor-demo\">\r\n             <SafeAnchor onClick = { this.handleClick }>事件锚点</SafeAnchor>\r\n         </div>\r\n         )\r\n     }\r\n }\r\n","desc":" 在锚点上添加事件"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
