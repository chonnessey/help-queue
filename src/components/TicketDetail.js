import React from 'react';
import PropTypes from 'prop-types';

function TicketDetail(props) {
  const { ticket } = props;

  return (
    <>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <hr/>
    </>
  )
}

TicketDetail.propTypes = {
  ticket: PropTypes.object
}

export default TicketDetail;