import React, {Component} from 'react'
import Link from 'gatsby-link'
import {Button} from 'antd'
import Modal from 'react-modal'

class ModalWindow extends React.Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: '',
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div>
        <Button onClick={this.openModal}>Open Modal</Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <Button onClick={this.closeModal}>close</Button>
          <div>I am a modal</div>
          <form>
            <input />
            <Button>tab navigation</Button>
            <Button>stays</Button>
            <Button>inside</Button>
            <Button>the modal</Button>
          </form>
        </Modal>
      </div>
    )
  }
}

export default ModalWindow