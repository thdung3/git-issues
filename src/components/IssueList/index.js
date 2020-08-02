import React from "react";
import { Table, Row, Col, Badge } from 'react-bootstrap'
import Moment from 'react-moment'
import './style.css'

const IssueList = ({ issues, showDetail }) => {
    return (
        <div className="issue-list">
            <Table bordered hover>
                <tbody>
                    {issues.map((issue) => (
                        <tr>
                            <td>
                                <Row>
                                    <Col md={1} className="issue-icon-area">
                                        <i className="fas fa-code-branch"></i>
                                    </Col>
                                    <Col md={9} className="issue-title-area">
                                        <h5 className="issue-title" onClick={() => showDetail(issue)}>
                                            {issue.title} {' '}
                                            {issue.labels.map(label =>
                                                (
                                                    <Badge variant="secondary">
                                                        {label.name}
                                                    </Badge>
                                                )
                                            )}
                                        </h5>
                                        <p className="issue-status text-muted">#{issue.number} last updated <Moment fromNow>{issue.updated_at}</Moment> by <a href="#main">{issue.user.login}</a></p>
                                    </Col>
                                    <Col md={1}></Col>
                                    <Col md={1}>
                                        {issue.comments > 0 && <p className="issue-comment" onClick={() => showDetail(issue)}><i className="far fa-comment-alt"></i> {issue.comments}</p>}
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table >
        </div >
    );
};

export default IssueList;
