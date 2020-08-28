import React from 'react';
import ReactDOM from 'react-dom'
import {Helmet} from 'react-helmet'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"

const mainColor= ["#BDB76B", "#228B22", "#00FA9A", "#808000", "#6B8E23", "#008B8B", "#00BFFF", "#000080", "#7B68EE", "#FF00FF", "#4B0082", "#C71585", "#808080", "#2F4F4F", "#DAA520", "#800000", "#D2691E", "#778899", "#40E0D0", "#F0E68C"];
//let index = Math.floor(Math.random()*20);


const QuoteBox = function(props){
    return (
      <div id="quote-box" className="container-fluid">
        <p id="text" style={{color: mainColor[props.randomIndex]}}>
		<FontAwesomeIcon icon={faQuoteLeft}/> {props.quotes[props.randomIndex].quote} <FontAwesomeIcon icon={faQuoteRight}/></p>
        <p id="author" style={{color: mainColor[props.randomIndex]}}>- {props.quotes[props.randomIndex].author}</p>
        <button id="new-quote" className="color" onClick={() => {props.onClick()}} className="btn btn-block" style={{background: mainColor[props.randomIndex]}}>New Quote</button><br/>
        <a id="tweet-quote" href={'https://twitter.com/intent/tweet?text="'+props.quotes[props.randomIndex].quote+'" -'+props.quotes[props.randomIndex].author} className="links" target="_blank">
			<FontAwesomeIcon icon={faTwitterSquare} size="3x" style={{color: mainColor[props.randomIndex]}}/>
		</a>
		<a id="facebook" href="https://www.facebook.com/" className="links" target="_blank">
			<FontAwesomeIcon icon={faFacebookSquare} size="3x" style={{color: mainColor[props.randomIndex]}}/>
		</a>
      </div>
    );
  }

class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			quotes: [
        {quote: 'You either die a hero or live long enough to see yourself become  a villain.',
        author: 'Harvey Dent'},
        {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 
        author: 'Nelson Mandela'},
        {quote: 'The way to get started is to quit talking and begin doing.', 
        author: 'Walt Disney'},
        {quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", 
        author: 'Steve Jobs'},
        {quote: 'If life were predictable it would cease to be life, and be without flavor.', 
        author: 'Eleanor Roosevelt'},
        {quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", 
        author: 'Oprah Winfrey'},
        {quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", 
        author: 'James Cameron'},
        {quote: "Life is what happens when you're busy making other plans", 
        author: 'John Lennon'},
        {quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", 
        author: 'Mother Teresa'},
        {quote: "When you reach the end of your rope, tie a knot in it and hang on.", 
        author: 'Franklin D. Roosevelt'},
        {quote: "Always remember that you are absolutely unique. Just like everyone else.", 
        author: 'Margaret Mead'},
        {quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", 
        author: 'Helen Keller'},
        {quote: "Whoever is happy will make others happy too.", 
        author: 'Anne Frank'},
        {quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", 
        author: 'Benjamin Franklin'},
        {quote: "In the end, it's not the years in your life that count. It's the life in your years.", 
        author: 'Abraham Lincoln'},
        {quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.", 
        author: 'Thomas A. Edison'},
        {quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.", 
        author: 'Oscar Wilde'},
        {quote: "Only a life lived for others is a life worthwhile.", 
        author: 'Albert Einstein'},
        {quote: "The purpose of our lives is to be happy.", 
        author: 'Dalai Lama'},
        {quote: "Love the life you live. Live the life you love.", 
        author: 'Bob Marley'}
      ],
			randomIndex: Math.floor(Math.random()*20)
		}	
	}
	
	
  generateRandomIndex(){
    this.setState({randomIndex: Math.floor(Math.random()*20)});
  }
	
	
	render(){
		return(
			<div>
			<Helmet>
					<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
					<style>{'body { background-color:'+ mainColor[this.state.randomIndex]+ '; }'}</style>
			</Helmet>
			
				<QuoteBox quotes={this.state.quotes} randomIndex={this.state.randomIndex} onClick={() => {this.generateRandomIndex()}}/>
			</div>
		)
	}
}

ReactDOM.render(<Main/>, document.getElementById('root'));