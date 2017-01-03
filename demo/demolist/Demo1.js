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
