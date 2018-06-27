/* eslint function-paren-newline: 0 */
import React from 'react';
import { connect } from 'react-redux';
import {
  InputGroup,
  Button,
  Modal,
  Input,
} from 'reactstrap';
import authComponent from './hoc/authComponent';
import modalControl from './hoc/modalControl';
import postControl from './hoc/postControl';

const mapStateToProps = state => ({
  auth: state.auth,
  userId: state.session.userId,
  userName: state.session.userName,
});

const Dashboard = props => (
  <div className="dashboard-container">
    <div className="top">
      <span className="me name">{props.userName}</span>
      <span className="title">dwidder</span>
      <InputGroup size="lg">
        <Button onClick={props.modalToggle}>New Post</Button>
      </InputGroup>
    </div>
    <Modal isOpen={props.modalOpen}>
      <div onClick={props.modalToggle} className="modal-close">X</div>
      <Input type="textarea" value={props.postValue} onChange={props.postUpdate} />
      <Button
        className="post"
        onClick={() => { props.modalToggle(); props.postSubmit(); }}
      >
        Post
      </Button>
    </Modal>
  </div>
);

export default connect(mapStateToProps)(
  authComponent(
    postControl(
      modalControl(
        Dashboard,
      ),
    ),
  ),
);
