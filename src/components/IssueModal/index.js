import React from "react";
import { Modal, Table, Row, Col, Button } from 'react-bootstrap'
import './style.css'
import Moment from 'react-moment'
import ReactMarkDown from 'react-markdown'
import ClipLoader from "react-spinners/ClipLoader";

const IssueModal = ({ showModal, setShowModal, selectedIssue, listCommentIssue, loadingComments, disableShowMore, handleMore }) => {
    return (
        <div>
            {selectedIssue &&
                <Modal
                    size="lg"
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            {selectedIssue.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row >
                            <Col md={1}>
                                <img className="col-md-12 modal-avatar" src={selectedIssue.user.avatar_url} alt="" />
                            </Col>
                            <Col md={11}>
                                <Table bordered>
                                    <thead className="modal-table-header">
                                        <tr>
                                            <th><a href="#main">{selectedIssue.user.login}</a> commented <a href="#main"><Moment fromNow>{selectedIssue.created_at}</Moment></a></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><ReactMarkDown source={selectedIssue.body} skipHtml="true" /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        {listCommentIssue.map(item => {
                            return (
                                <Row >
                                    <Col md={1}>
                                        <img className="col-md-12 modal-avatar" src={item.user.avatar_url} alt="" />
                                    </Col>
                                    <Col md={11}>
                                        <Table bordered>
                                            <thead className="modal-table-header">
                                                <tr>
                                                    <th><a href="#main">{item.user.login}</a> commented <a href="#main"><Moment fromNow>{item.created_at}</Moment></a></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><ReactMarkDown source={item.body} skipHtml="true" /></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            )
                        })}
                        <div className="d-flex justify-content-center">
                            {loadingComments ? (
                                <ClipLoader color="#f86c6b" size={75} loading={loadingComments} />
                            ) : (
                                    <>
                                        {!disableShowMore && (
                                            <Button
                                                type="button"
                                                onClick={handleMore}
                                                disabled={disableShowMore}
                                            >
                                                Show More
                                            </Button>
                                        )}
                                    </>
                                )}
                        </div>
                    </Modal.Body>
                </Modal>
            }
        </div >
    );
};

export default IssueModal;
