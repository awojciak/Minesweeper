import React, { Component } from 'react';
import './App.css';

window.addEventListener("contextmenu", e => {
  e.preventDefault();
});

function Field(props)
{
	let nameOfClass;
	if(props.marked === true)
	{
		nameOfClass = "markedField";
	}
	else
	{
		nameOfClass = "unmarkedField";
	}		
		return (
			<button className={nameOfClass} onClick={props.onClick} onContextMenu={props.onContextMenu}>
				{props.value}
			</button>
		)
}

class Board extends Component
{
	newField(num)
	{
		return ( <Field 
			marked={this.props.marked[num]} 
			value={this.props.fields[num]} 
			onClick={() => this.props.onClick(num)} 
			onContextMenu={() => {this.props.onContextMenu(num)}} 
		/> );
	}
	
	render()
	{
		const board = [];
		for(let i = 0; i < 10; i++)
		{
			let row = [];
			for(let j = 0; j < 10; j++)
			{
				row.push(this.newField((i*10)+j));
			}
			board.push(<div className="row">{row}</div>);
		}
		return <div>{board}</div>;
	}
}

function arrayFilled(size)
	{
		let bombs = Array(size).fill(false);
		let tmp = 10;
		while(tmp !== 0)
		{
			let position = Math.floor(Math.random()*99);
			if(!bombs[position])
			{
				tmp--;
				bombs[position] = true;
			}
		}
		return bombs;
	}

class App extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			fields: Array(100).fill(true),
			marks: 10,
			clicked: Array(100).fill(false),
			bombs: arrayFilled(100),
			marked: Array(100).fill(false),
			counter: 0,
			stat: true,
			banner: 'Póki co żyjesz'
		}
		this.clickHandler = this.clickHandler.bind(this);
		this.contextMenuHandler = this.contextMenuHandler.bind(this);
	}
	
	clickHandler(i)
	{
		let clicked = this.state.clicked;
		let fields = this.state.fields;
		let counter = this.state.counter;
		let stat = this.state.stat;
		let banner = this.state.banner;
		if(clicked[i] || !stat)
		{
			return;
		}
		
		if(this.state.marked[i] === false && this.state.bombs[i] === false)
		{
			let neighborBombs = 0;
			if(i-10 >= 0 && this.state.bombs[i-10] === true)
			{
				neighborBombs++;
			}
			if(i+10 <= 99 && this.state.bombs[i+10] === true)
			{
				neighborBombs++;
			}
			
			if(i%10 !== 0 && this.state.bombs[i-1] === true)
			{
				neighborBombs++;
			}
			if(i%10 !== 9 && this.state.bombs[i+1] === true)
			{
				neighborBombs++;
			}
			
			if(i%10 !== 0 && i-11 >= 0 && this.state.bombs[i-11] === true)
			{
				neighborBombs++;
			}
			if(i%10 !== 9 && i+11 <= 99 && this.state.bombs[i+11] === true)
			{
				neighborBombs++;
			}
			
			if(i%10 !== 9 && i-9 >= 0 && this.state.bombs[i-9] === true)
			{
				neighborBombs++;
			}
			if(i%10 !== 0 && i+9 <= 99 && this.state.bombs[i+9] === true)
			{
				neighborBombs++;
			}
			
			fields[i] = neighborBombs;
			clicked[i] = true;
			counter++;
		}
		else if(this.state.marked[i] === false && this.state.bombs[i] === true)
		{
			stat = false;
			clicked[i] = true;
			fields[i] = '#';
			counter++;
			banner = 'Bardzo się starałeś, lecz grę przerypałeś'
		}
		
		if(counter === 100)
		{
			banner = 'Brawo! Zwycięstwo!';
			stat = false;
		}
		
		this.setState({
			fields: fields,
			clicked: clicked,
			counter: counter,
			stat: stat,
			banner: banner,
		});
	}
	
	contextMenuHandler(i)
	{
		let clicked = this.state.clicked;
		let marked = this.state.marked;
		let counter = this.state.counter;
		let marks = this.state.marks;
		let banner = this.state.banner;
		let stat = this.state.stat;
		
		if(clicked[i] && !marked[i] && this.state.fields !== null){
			return;
		}
		
		if(!stat)
		{
			return;
		}
		
		if(!marked[i] && marks > 0)
		{
			marked[i] = true;
			clicked[i] = true;
			counter++;
			marks--;
		}
		else if(marked[i])
		{
			marked[i] = false;
			clicked[i] = false;
			counter--;
			marks++;
		}
		
		if(counter === 100)
		{
			banner = 'Brawo! Zwycięstwo!';
			stat = false;
		}
		
		this.setState({
			marked: marked,
			clicked: clicked,
			counter: counter,
			marks: marks,
			stat: stat,
			banner: banner,
		});
		
		return;
	}
	
  render() {
    return (
	<div>
		<div>{this.state.banner} <br /> Ilość znaczników do wykorzystania: {this.state.marks} <br /></div>
      <Board 
		fields={this.state.fields} 
		onClick={(i) => this.clickHandler(i)} 
		onContextMenu={(i) => {this.contextMenuHandler(i)}} 
		marked={this.state.marked} 
	  />
	</div>
    );
  }
}

export default App;
