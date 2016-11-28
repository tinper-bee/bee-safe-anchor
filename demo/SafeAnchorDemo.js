import SafeAnchor from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
class Demo extends Component {
    handleClick () {
        alert('111');
    }
    render(){
    return(
        <div>
            <SafeAnchor href="https://www.tinper.org">aaa</SafeAnchor>
            <SafeAnchor href="https://www.tinper.org" disabled>bbb</SafeAnchor>
            <SafeAnchor onClick = { this.handleClick }>cccc</SafeAnchor>
            <SafeAnchor componentClass='div'>ddd</SafeAnchor>
        </div>
        )
    }
}
export default Demo;
