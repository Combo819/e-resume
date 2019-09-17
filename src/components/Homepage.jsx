import React, { Component } from 'react';
import { Button, Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout;
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<Layout className="layout">
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: '80vh',marginTop:'50px' }}>
                  
                       <li><a href="https://combo819.github.io/myPhotoBlog/index.html">myPhotoBlog</a></li>
                       <li><a href="https://combo819.github.io/film_quiz/#/">file quiz</a></li>
                       <li><a href="https://combo819.github.io/letter_en/#/">letter en, Select Apirl 14</a></li>
                       <li><a href="http://107.22.153.155:5000"> eat </a></li>
                   
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>@kang</Footer>
        </Layout>);
    }
}

export default Homepage;