import React from 'react'
import './App.css';
import ListItem from './ListItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

class ToDoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    // this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  // handleInput(e){
  //   this.setState({
  //     currentItem:{
  //       text: e.target.value,
  //       key: Date.now()
  //     }
  //   })
  // }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    const items = this.state.items;
    items.map(item=> {      
      if(item.key === key){
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
 render(){
  return (
    <div className="App">
      <header>
        <form 
        id="to-do-list" 
        onSubmit={this.addItem}>
          <input 
            type="text" 
            placeholder="Enter task" 
            value= {this.state.currentItem.text} 
            onChange={(e) => this.setState({
              currentItem: {text:e.target.value, key:Date.now()}})}
          />
          <button type="submit">Add</button>
        </form>
        <p>{this.state.items.text}</p>
        
          <ListItem 
            items={this.state.items} 
            deleteItem={this.deleteItem} 
            setUpdate={this.setUpdate}
          />
        
      </header>
    </div>
  );
 }
}

export default ToDoList;
