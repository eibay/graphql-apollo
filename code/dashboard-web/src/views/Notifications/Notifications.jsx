import React, { Component } from 'react';
import { Grid, Row, Col, Alert } from 'react-bootstrap';
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import Button from 'elements/CustomButton/CustomButton.jsx';
import {NotificationList} from 'views/Notifications/NotificationList.jsx';

class Notifications extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Notifications</h4>
              <p className="category">Handcrafted by <a target="_blank" rel="noopener noreferrer" href="https://github.com/igorprado">Igor Prado</a>. Please checkout the <a href="http://igorprado.com/react-notification-system/" rel="noopener noreferrer" target="_blank">full documentation.</a></p>

            </div>
            <div className="content">
              <Row>
                <Col md={12}>
                  <h5>Notifications</h5>

                  <Alert bsStyle="info" className="alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                    <span data-notify="icon" className="pe-7s-bell"></span>
                    <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                  </Alert>
                </Col>
                <Col md={6}>
                  <h5>Notification states</h5>
                  <Alert bsStyle="info">
                    <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                    <span><b> Info - </b> This is a regular notification made with bsStyle="info"</span>
                  </Alert>
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                    <span><b> Success - </b> This is a regular notification made with bsStyle="success"</span>
                  </Alert>
                  <Alert bsStyle="warning">
                    <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                    <span><b> Warning - </b> This is a regular notification made with bsStyle="warning"</span>
                  </Alert>
                  <Alert bsStyle="danger">
                    <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                    <span><b> Danger - </b> This is a regular notification made with bsStyle="danger"</span>
                  </Alert>
                </Col>
              </Row>
              <br />
              <div className="places-buttons">
                <Row>
                  <Col md={12}>
                    <Button bsStyle="default" block onClick={() => this.props.handleClick('tc')}>Load More</Button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}


Notifications.fragments = {
  allNotifications: NotificationList.fragment
}


const DASHBOARD_QUERY = gql`
  query NotificationsQuery {    
    ...AllNotificationsNotificationsQuery    
  }
  ${Notifications.fragments.allNotifications}
`



const NotificationsWithQuery = graphql(DASHBOARD_QUERY, {
  name: 'NotificationsQuery',
  options(props) {
    return {
      variables: {
      },
      fetchPolicy: 'network-only'
    }
  }
})(Notifications)

export default NotificationsWithQuery;
