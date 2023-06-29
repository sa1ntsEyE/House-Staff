import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'Luna' ,
                    img: '1.png' ,
                    desc: 'Кровать Luna 160х200 мягкая спинка c ящиками' ,
                    category: 'bed' ,
                    price: '9471'
                },
                {
                    id: 2,
                    title: 'Асти' ,
                    img: '2.png' ,
                    desc: 'Кровать Асти 160х200 с мягкой спинкой' ,
                    category: 'bed' ,
                    price: '6186'
                },
                {
                    id: 3,
                    title: 'Селена' ,
                    img: '3.png' ,
                    desc: 'Кровать Селена 160х200' ,
                    category: 'bed' ,
                    price: '17999'
                }
            ],
            showFullItem: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }
  render() {
      return (
          <div className="wrapper">
              <Header orders={this.state.orders} onDel = {this.deleteOrder}/>
              <Categories onChoose = {this.chooseCategory}/>
              <Items onShowItem={this.onShowItem} items = {this.state.currentItems} onAdd={this.addToOrder}/>
              {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
              <Footer/>
          </div>
      );
  }

  onShowItem(item) {
        this.setState({fullItem : item})
        this.setState({showFullItem: !this.state.showFullItem})
  }
  chooseCategory(category) {
        if (category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }

        this.setState({
            currentItems : this.state.items.filter(el => el.category === category)
        })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder (item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id) {
                isInArray = true
            }
        })
      if(!isInArray){
          this.setState({orders: [...this.state.orders, item]})
      }
  }
}

export default App;
