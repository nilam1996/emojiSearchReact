import React from 'react'
export default class Search_input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    setData(event) {
        this.setState(
            { value: event.target.value }
        )
    }
    render() {
        return (
           
            <div className="search">
                <div className="emoji_class">
                <form>
                <input type="text" placeholder="Search for..." onChange={this.setData.bind(this)}/>
                </form>
                </div>
            </div>
        )

    }
}




