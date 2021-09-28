import React from 'react';
import './index.css'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      Cart:[],
      Apple:'Apple',
      Banana:'Banana',
      Orange:'Orange',
      Grapes:'Grapes',
      Strawberry:'Strawberry'
    }
    this.addApple=this.addApple.bind(this);
    this.addBanana=this.addBanana.bind(this);
    this.addOrange=this.addOrange.bind(this);
    this.addGrapes=this.addGrapes.bind(this);
    this.addStrawberry=this.addStrawberry.bind(this);
  }

  addApple(event){
    this.setState({
    Cart:[...this.state.Cart,this.state.Apple]
    })
  }

  addBanana(event){
    this.setState({
    Cart:[...this.state.Cart,this.state.Banana]
    })
  }

  addOrange(event){
    this.setState({
    Cart:[...this.state.Cart,this.state.Orange]
    })
  }

  addGrapes(event){
    this.setState({
    Cart:[...this.state.Cart,this.state.Grapes]
    })
  }

  addStrawberry(event){
    this.setState({
    Cart:[...this.state.Cart,this.state.Strawberry]
    })
  }
  render() {
    return(
      <div>
        <h1>Items</h1>
        <hr />
        <div className='apple'>
          <p>Apple</p>
          <button className='applebtn' onClick={this.addApple}>Add to cart</button>
        </div>

        <div className='banana'>
          <p>Banana</p>
          <button className='bananabtn' onClick={this.addBanana} >Add to cart</button>
        </div>

        <div>
          <p>Orange</p>
          <button className='orangebtn' onClick={this.addOrange}>Add to cart</button>
        </div>

        <div>
          <p>Grapes</p>
          <button className='grapesbtn' onClick={this.addGrapes}>Add to cart</button>
        </div>

        <div>
          <p>Strawberry</p>
          <button className='strawberrybtn' onClick={this.addStrawberry}>Add to cart</button>
        </div>
        <hr />
        <h1>Cart</h1>
        <hr />
        {this.state.Cart.map((item) =>{
          return(
            <p>{item}</p>
          )})}
      </div>
    )
  }
} 


export default App;
