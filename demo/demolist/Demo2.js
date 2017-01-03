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
