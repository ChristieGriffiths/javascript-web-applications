class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    this.hidebuttonEl = document.querySelector('#hide-message-button');
    this.hidebuttonEl.addEventListener('click', () => {
      this.hideMessage();
    })
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    const message = document.querySelector('#message-input').value 
    console.log(message)
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerText = message;
    document.querySelector('#main-container').append(messageElement);
  }
  hideMessage() {
    const messageElement = document.getElementById("message");
    messageElement.remove();
  }
}

module.exports = MessageView;