const GIPHY_API_URL = 'http://api.giphy.com';
const GIPHY_PUB_KEY = 'dc6zaTOxFJmzC';
App = React.createClass({
    getInitialState() {
        return {
            loading: false,
            searchingText: '',
            gif: {}
        };
    },

    render: function(){
        return (
            <div className={'app'}>
                <h1> Gif search</h1>
                <p> Search <a href={'http://giphy.com'}>giphy</a>. Press enter to download more gifs</p>
                <Search onSearch={this.handleSearch}/>
                <Gif loading={this.state.loading} url={this.state.gif.url} sourceUrl={this.state.gif.sourceUrl}/>
            </div>
            );

    },
    handleSearch: function(searchTerm){
        this.setState({
            loading: true,
        });

        this.getGif(searchTerm)
        .then((gif)=>{
            this.setState({
                loading: false,
                gif: gif,
                searchTerm: searchTerm
            })
        })
        .catch(err => console.log(`getGif error: status ${err}`));
    },
    getGif: function(searchTerm){
        return new Promise(
            (resolve, reject) => {
                let url = `${GIPHY_API_URL}/v1/gifs/random?api_key=${GIPHY_PUB_KEY}&tag=${searchTerm}`;
                let xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        let data = JSON.parse(xhr.responseText).data;
                        let gif = {
                            url: data.fixed_width_downsampled_url,
                            sourceUrl: data.url
                        };
                        resolve(gif);
                    }else{
                        reject(xhr.status);
                    }
                };
                xhr.send();
            }
        )
    },
})