import React from 'react'
import EmojiList from './emojiList.json'
import './emoji.css'



export default class FilterEmoji extends React.Component {
    constructor(){
        super();
        this.state = {
            emoji_find: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            emoji_find : event.target.value
            
        });
    }

render() {
    const {emoji_find} = this.state;

    const filterEmoji = EmojiList.filter( emoji => {
            if (emoji.title.toLowerCase().indexOf(emoji_find.toLowerCase()) !== -1){
                return true;
            }
            if (emoji.symbol.toLowerCase().indexOf(emoji_find.toLowerCase()) !== -1){
                return true;
            }
            return false;
        });


    return (
        <div>
            <div className="search_input">
            <input className="input" type="text" placeholder="Search for..." onChange={this.handleChange} />
            </div>
    <div>

    {filterEmoji.slice(0,20).map(function(emoji_find,index){
    return <div key={index} className="itmes">
            <span className="emoji">{emoji_find.symbol} {emoji_find.title} <span className="click_class" >click here</span>
            </span>
        </div>
        })}
    </div>
    </div>
    )}
}
