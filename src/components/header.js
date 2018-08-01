import React from 'react'
import { NavLink} from 'react-router-dom'

export default class IHeader extends React.Component {
  state = {
    navList: [
      {
        title: 'HG首页',
        link: '/'
      },
      {
        title: '娱乐城',
        link: '/game'
      },
      {
        title: '优惠信息',
        link: '/discount'
      },
      {
        title: '行业资讯',
        link: '/news'
      },
      {
        title: '游戏技巧',
        link: '/skill'
      },
      {
        title: '认证评测',
        link: '/comment'
      }
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.navList.map(item =>
            <li key={item.title} onClick={this.handleItemClick}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          )}
        </ul>
      </div>
    )
  }

  handleItemClick() {

  }
}