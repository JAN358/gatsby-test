import React, {Component} from 'react'
import PropTypes from "prop-types"
import Link from 'gatsby-link'
import {Row, Col, Layout, Menu, Breadcrumb, Button, Form, Icon, Input, Checkbox} from 'antd'
import Modal from 'react-modal'
import styles from './navigation.module.css'

const { Content, Sider } = Layout;

class Navigation extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      showModal2: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleOpenModal2 () {
    this.setState({ showModal2: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  handleCloseModal2 () {
    this.setState({ showModal2: false });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    return (
      <Row>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/">Заголовок сайта</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/blog/">Блог</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/blog/">Услуги</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/blog/">Контакты</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/blog/">О нас</Link></Menu.Item>
        <Menu.Item key="6"><Link to="/blog/">Карта</Link></Menu.Item>
        <Menu.Item key="7"><Link to="/blog/">Новости</Link></Menu.Item>
        <Menu.Item key="8"><a href="tel:+791791478658">+7(917)914 76-58</a></Menu.Item>
        <Menu.Item key="9"><Button onClick={this.handleOpenModal} type="primary">Модалка 1</Button></Menu.Item>
        <Menu.Item key="10"><Button onClick={this.handleOpenModal2} type="primary">Модалка 2</Button></Menu.Item>
      </Menu>
      <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <Button onClick={this.handleCloseModal}>close</Button>
          <div>Модалка</div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          isOpen={this.state.showModal2}
          contentLabel="Modal #2"
          onRequestClose={this.handleCloseModal2}
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <Button onClick={this.handleCloseModal2}>close</Button>
          <div>Модалка 2</div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <p>Modal #2 text!</p>
          </Form>
        </Modal>
      </Row>
    )
  }
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation