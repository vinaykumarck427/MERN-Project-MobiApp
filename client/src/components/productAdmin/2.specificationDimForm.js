import React from 'react'
import axios from '../../config/axios'

class SpecificationDimForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            height: '',
            width: '',
            thickness: '',
            weight: '',
            colors: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Height <br />
                        <input type = "number" value={this.state.height} onChange = {this.handleChange} name = "height" />
                    </label><br />
                    <label>
                        Width <br />
                        <input type = "number" value={this.state.width} onChange = {this.handleChange} name = "width"/>                        
                    </label><br/>
                    <label>
                        Thickness <br />
                        <input type = "number" value={this.state.thickness} onChange = {this.handleChange} name = "thickness"/>
                    </label><br />
                    <label>
                        Weight <br />
                        <input type = "number" value={this.state.weight} onChange = {this.handleChange} name = "weight"/>
                    </label><br />
                    <label>
                        Color <br />
                        <input type = "text" value={this.state.colors} onChange = {this.handleChange} name = "colors"/>
                    </label><br />
                </form>
            </div>            
        )
    }
}

export default SpecificationDimForm