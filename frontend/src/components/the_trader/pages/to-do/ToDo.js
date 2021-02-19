import { Component } from "react";
import "./to-do.css";
import List from "./List";

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {

      let options={
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: this._inputElement.value , key: Date.now()})
      }
      fetch('http://localhost:3000/trader/toDo', options);
      itemArray.unshift(
        {
          text: this._inputElement.value,
          key: Date.now()
        }
      );

      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";
    }
    console.log(itemArray);
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {

      fetch('http://localhost:3000/trader/toDo', {method: 'DELETE'});
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <div className="list-upper-div">
        <List entries={this.state.items}
                  delete={this.deleteItem}/>
        </div>
      </div>
    );
  }
}

export default ToDo;
