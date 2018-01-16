const GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';


Gif = React.createClass({

    getUrl: function(){
        return this.props.sourceURL || GIPHY_LOADING_URL;
    },

    getInitialState: function(){
        return {
            loading: false,
            searchingText: '',
            gif: {}
        };
    }, 

    render: function (){
        let url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

        return (
            <div className={'gif-container'}>
                <a href={this.getUrl()} title='view this on giphy' target='new'>
                    <img id={'gif'} className={'gif-img'} src={url} />
                </a>
            </div>
        );
    }
});