import React from 'react';

class InsertItem extends React.Component{
    state = {
        content:""
    }

    handleChange = (e) => {
        this.setState({content: e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({content: ""})
    }

    render(){
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" name="" id="" value="+"/>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
            
        )
    }
}

export default InsertItem;