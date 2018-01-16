Search = React.createClass({
    getInitialState: function(){
        return {
            searchTerm: '',
        }
    },

    render: function(){
        return (
            <input 
                className={'searchBar'} 
                type={'text'} 
                onChange={this.handleChange} 
                placeholder={'phrase'} 
                onKeyUp={this.handleKeyUp}
                value={this.state.searchTerm} />
        );
    },

    handleChange: function(e){
        this.setState({
            searchTerm: e.target.value
        });
        if(e.target.value.length > 2){
            this.props.onSearch(e.target.value);
        }
    },

    handleKeyUp: function(e){
        if(e.keyCode === 13){
            this.props.onSearch(this.state.searchTerm);
        }
    }

})