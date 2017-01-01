import React from 'react';

class CreateIdeaForm extends React.Component {

  createIdea(event) {
    event.preventDefault();
    const idea = {
      venue: this.venue.value,
      street: this.street.value,
      price: this.price.value,
      attr_list: this.attr_list.value,
      image: this.image.value,
    }
    console.log(idea);
  }
  // add createIdea method here

  render() {
    return (
      <form className="add-idea-form" onSubmit={(e) => this.createIdea(e)}>
        <label for="venue" className="form-field">Venue Name:
          <input type="text" name="venue" required ref={(input) => {this.venue = input}}/>
        </label>
        <label for="street" className="form-field">Cross Streets:
          <input type="text" name="street" ref={(input) => {this.street = input}} />
        </label>
        <label for="price" className="form-field">Price Point:
          <input name="price" type="number" ref={(input) => {this.price = input}} />
        </label>
        <label for="attr_list" className="form-field"> Attributes:
          <input type="text" name="attr_list" ref={(input) => {this.attr_list = input}} />
          </label>
          <label for="image" className="form-field"> Image:
            <input type="url" name="image" ref={(input) => {this.image = input}} />
          </label>

          <button type="submit" name="submit" >Add It!</button>
          <button disabled="disabled">Add #4</button>
          <button> Clear 1 item</button>
      </form>
    );
  }
}

export default CreateIdeaForm;
