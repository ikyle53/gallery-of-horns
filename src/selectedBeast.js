import React from "react";
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.description}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.imageUrl} alt={this.props.description} />
                </Modal.Body>
            </Modal>
        )
    }
}

export default SelectedBeast;