import React from 'react'
import ListTodo from '../../pages/todo/ListTodo'
import styles from './Todo.module.scss'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button'

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    // this.addItem = this.addItem.bind(this);
    //this.handleInput = this.handleInput.bind(this);
    //this.deleteItem = this.deleteItem.bind(this);
    //this.setUpdate = this.setUpdate.bind(this);
  }
  
   addItem = (e) =>{
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
  handleInput = (e) =>{
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Math.random()
      }
    })
  }
  deleteItem = (key) => {
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate = (text,key) =>{
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
 render(){
  return (
    <div className={styles.todoCardContent}>
        <form onSubmit={this.addItem}>
          <TextareaAutosize className={styles.todoTextarea} rowsMin={5} type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}/>
          <Button variant="outlined" color="primary" type="submit" className={styles.addBtn}>
            ADD
          </Button>
        </form>
        <div>{this.state.items.text}</div>
        
        <ListTodo items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
  
    </div>
  );
 }
}

export default Todo;