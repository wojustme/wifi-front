'use strict';
/**
 * src/components/lessee/LesseeBG.jsx
 */
import React from 'react';
import AppHeader from '../common/AppHeader';
import Image from '../common/Image';
/**
 * @class             租户中心第0屏的背景组件
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class LesseeBG extends React.Component {

  // 组件渲染
  render() {
    const { appHeaderStates } = this.props;
    return (
      <div>
        <AppHeader itemStates={appHeaderStates}/>
        <Image locateTo='lessee' imgName='租户中心背景'/>
      </div>
    );
  }

}

export { LesseeBG as default };