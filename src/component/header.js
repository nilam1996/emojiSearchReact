import React from 'react'
import cat from './cat.png'
import cat1 from './cat1.png'

export default class Header extends React.Component {
    render() {
        return (
            <div className="main">
                <img src={cat} width="22" height="22" />
                <span>Emoji search</span>
                <img src={cat1} width="22" height="22" />
            </div>

        )
    }
}