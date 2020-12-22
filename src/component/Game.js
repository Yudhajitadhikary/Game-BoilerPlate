
import React, { Component } from 'react'

export default class Game extends Component {
    render() {
        console.log(this.props.location.data)
        return (
            <div>
                Game
            </div>
        )
    }
}
