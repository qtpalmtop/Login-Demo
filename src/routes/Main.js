import React from 'react'
import PropTypes from 'prop-types'
import {
  connect
} from 'dva'
import {
  Link
} from 'dva/router'
import './main.css';

class Sider extends React.Component {
    state = {
      films: [{
        name: '速度与激情8',
        smallImg: 'http://118.89.199.87:3000/img/F8.jpg'
      }, {
        name: '蓝精灵:寻找神秘村',
        smallImg: 'http://118.89.199.87:3000/img/LJL.jpg'
      }, {
        name: '记忆大师',
        smallImg: 'http://118.89.199.87:3000/img/JY.jpg'
      }, {
        name: '亚瑟王:群雄真霸',
        smallImg: 'http://118.89.199.87:3000/img/ys.jpg'
      }]

    }
    render() {
        return (
            <div style={{width:'100%'}}>
              <section style={styles.panel}>
                <div style={styles.panelContent}>
                  <div style={styles.panelTitle}>
                      <p>正在热映 </p>   
                  </div>
                  <div style={styles.panelBody}>
                      <div>
                          <ul>
                            <li style={styles.image}>
                                <a href=''> <img src={this.state.films[0].smallImg} style={styles.image.img}></img> </a>
                                <p>{this.state.films[0].name}</p>
                            </li>
                            <li style={styles.image}>
                                <a href=''> <img src={this.state.films[1].smallImg} style={styles.image.img}></img> </a>
                                <p>{this.state.films[1].name}</p>
                            </li>
                            <li style={styles.image}>
                                <a href=''> <img src={this.state.films[2].smallImg} style={styles.image.img}></img> </a>
                                <p>{this.state.films[2].name}</p>
                            </li>
                            <li style={styles.image}>
                                <a href=''> <img src={this.state.films[3].smallImg} style={styles.image.img}></img> </a>
                                <p>{this.state.films[3].name}</p>
                            </li>
                          </ul>              
                            
                          
                      </div>
                  </div>
                </div> < /section> < /div >


    );
  }
}

const styles = {
  panel: {
    width: '1100 px',
    margin: '10px 288px'
  },
  panelContent: {
    width: '815px',
    float: 'left'
  },
  panelTitle: {
    height: '44px',
    padding: '4px 25px',
    fontSize: '20px',
    backgroundColor: '#4C5356',
    color: '#fff'
  },
  panelBody: {
    border: '1px solid #4A6274',
    borderTop: 'none',
    paddingBottom: '20px',
    overflow: 'auto'
  },
  image: {
    float: 'left',
    height: '250px',
    width: '190px',
    marginLeft: '10px',
    textAlign: 'center',
    fontSize: '15px',
    marginTop: '30px',
    position: 'relative',
    img:{height: '100%',width: '100%'},
  }
}


export default connect(({
  main
}) => ({
  main
}))(Sider)