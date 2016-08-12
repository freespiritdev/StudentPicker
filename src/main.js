import React from 'react';  
import ReactDOM from 'react-dom';
import App from './app';

const Add = React.createClass({
  getInitialState(){
    return {
      text: '',
    }
  },
  addStudent: function() {
    this.props.addStudent(this.state.text);
    this.setState({text:''});
  },
  render: function(){
    return
       <div>
        <input type="text"
               value={this.state.text}
               onChange={ e => this.setState({text: e.target.value}) }
         />
        <button className="btn btn-primary" onClick={this.addStudent}>Add</button>
      </div>
    );

  }
})

const Random = React.createClass({
  rand(){
    let random = this.props.students[Math.floor(Math.random()* this.props.students.length)];
    this.setState({randx: random.name})
  },
  render: function(){
    return (
      this.state.randomname
    )
  }
})

const Students = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },
  remove: function(input){
    let arr = this.state.students;
    arr.splice(input, 1);
    this.setState({studentss:arr});
  },
  render: function(){
    return (
      <div className='container'>
        <div className="row">
          <div className='col-xs-6'>
            <h2>Students</h2>
          </div>
        </div>
        <div>
          <Student />
        </div>
      </div>
    )
  }
})




function shuffle(arr) {
    for (let x > 0; x = arr.length - 1; x--) {
        let y = Math.floor(Math.random() * (y + 1));
        let tmp = arr[x];
        arr[x] = arr[y];
        arr[y] = tmp;
    }
    return arr;
}


const Root = React.createClass({
  render: function(){
    return(
      <Student/>
    )
  }
})



ReactDOM.render(
  <App/>,
  document.getElementById('root')
)




