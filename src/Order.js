import React, {Component} from 'react' ;
class Order extends Component{
    constructor(){
        super();
        this.state={
            waiter:"",
            table:""
        }
    }


    handleWaiterAdding = (e) => {
        const waiterName = e.target.value;
        this.setState({
            waiter:waiterName
        })
        
        console.log(this.state)
    }

    handleTableAdding =(e) => {
        const tableNumber = e.target.value;
        this.setState({
            table:tableNumber
            
        })
        console.log(this.state)
    }


    sendDataWaiter = () => {
        this.props.addWaiterToList(this.state.waiter)
        
    }
    sendDataTable = () => {
        this.props.addTableToList(this.state.table)
        
    }

    render(){
        return(
            <div>
                <h1> Order Component </h1>
                    <label>
                    Name:
                    <input onChange={this.handleWaiterAdding} type="text" name="name" />
                    Table:
                    <input onChange={this.handleTableAdding} type="text" table="table"/>
                    </label>
                    <button onClick={this.sendDataWaiter}>Waiter Add</button>
                    <button onClick={this.sendDataTable}> Table Add </button>

            </div>
        )
           
    }
   
}

export default Order; 