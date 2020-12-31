import React, {Component} from 'react' ;
import './order.css';
import './Order.js';
import Order from './Order';

class OrderList extends Component {  
    constructor(){
        super()
        this.state={
            restaurantOrders:[
                
                "table1",
                "table2"
                
            ]  ,
            waiters:["emir","gokalp"]
        }

        }
        orderListUpdater=()=>{
            const orders = this.state.restaurantOrders
            orders.push("table3")
            this.setState({restaurantOrders:orders})
        }
        waiterListUpdater=()=>{
            const waiters = this.state.waiters
            waiters.push("falcao")
            this.setState({waiters:waiters})
        }
        orderListdelete=()=>{
            const orders = this.state.restaurantOrders
            orders.pop()
            this.setState({restaurantOrders:orders})
        }
        waiterListdelete=()=>{
            const waiters = this.state.waiters
            waiters.pop()
            this.setState({waiters:waiters})
        }

        addWaiterToList = (waiter) => {
            const waiters = this.state.waiters;
            waiters.push(waiter);
            this.setState({
                waiters:waiters
            })
        }
        addTableToList = (table) => {
            const restaurantOrders = this.state.restaurantOrders;
            restaurantOrders.push(table);
            this.setState({
                restaurantOrders:restaurantOrders
            })
        }

        


    render(){
        // const orders=this.state.restaurantOrders.map(table=><li> {table} </li>)
        return(
            <div>
            <p className="welcometext"> Hos geldiniz</p>
            <h1>Siparisinizi Giriniz...</h1>  
            {/* {orders} */}
            {this.state.restaurantOrders.map(table=><li key={Math.random()}> {table} </li>)}
            <button onClick={this.orderListUpdater}>
                add table
            </button>
            {this.state.waiters.map(waiter=><li key={Math.random()}> {waiter} </li>)}

            <button onClick={this.waiterListUpdater}>
                add waiter
            </button>
            
            <button onClick={this.orderListdelete}>
                delete table
            </button>

            <button onClick={this.waiterListdelete}>
                delete waiter
            </button>
            <Order addWaiterToList={this.addWaiterToList}  addTableToList={this.addTableToList} >

            </Order>
           
            </div>
            );
       
    }
}

export default OrderList;



        
    
    


  
  

    