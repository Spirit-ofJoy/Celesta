import React from 'react';
import {Component} from 'react' ;
import TodoList from './pages/to-do/List'
import './to-do.css'

class ToDo extends Component  {

  constructor(props) {
  super(props);

  this.state = {
    items: []
  };

  this.addItem = this.addItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
}

addItem(e){

  if(this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });

    this._inputElement.value = "";
  }

  console.log(this.state.items);

  e.preventDefault();

}


deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });

  this.setState({
    items: filteredItems
  });
}

render(){

    return (
        <div className="card" id="trader-toDo-container">
            <h1>Your To Do List</h1>

            <br /><br /><br /><br />

            <div classname="todoListMain">
              <div classname="header">
                <form onSubmit={this.addItem}>
                {/* Form for taking the details so we can get the desired output*/}


                  <input ref={(a) => this._inputElement = a}
                          placeholder="DAAL DO ANDAR" >
                  </input>
                  {/*Creating a reference of input value to the items array*/}

                  {/*Button for submitting the details of the entered text*/}
                    <button type="submit">Bhadao</button>
                </form>
              </div>
            </div>

            <List entries={this.state.items}
                  delete={this.deleteItem} />

        </div>

      );
    }
}

export default ToDo;
