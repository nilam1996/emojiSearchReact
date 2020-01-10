import React from 'react'
import EmojiList from './emojiList.json'
class Emoji extends React.Component{
    render(){
        return(
           <ul>
               {EmojiList.map(emojiList => 
               <div className="emoji_class"><li>{emojiList.symbol}{emojiList.title}</li></div>
    
                   )}
            </ul>
               
        )
    }
}; 
export default Emoji



