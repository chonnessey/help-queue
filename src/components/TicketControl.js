import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail'

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTicketList: [],
      selectedTicket: null
    };
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({
      masterTicketList: newMasterTicketList, formVisibleOnPage: false
    })
  }

  handleClick = () => {
    this.setState(prevState => 
      ({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} />
      buttonText = "Return to Ticket List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
      buttonText = 'Return to Ticket List';
    } else {
      currentlyVisibleState = <TicketList ticketList = {this.state.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
      buttonText = 'Add Ticket';
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

export default TicketControl;