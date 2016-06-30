class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			showMe:false,
			cityObj: weather[0]
		}
	}

    getWeather(query){
	    var options = {
	      query: query,
	      
	    };
	    searchWeather(options, (object) => {
	    	this.setState({
	    		cityObj: object
	    	})
	    });
    
  }
    hanClick(){
		this.setState({showMe:true});
		this.getWeather($('#textbox').val())	
    }
	render(){
		if(this.state.showMe){
			return (<div>
					<WeatherList wl={this.state.cityObj}/>
					</div>)
		}
		else {return(
			<div><img src="http://static.tumblr.com/a4deb37c05fa96b6128b0e097d45c745/oud8baz/mKQmt73js/tumblr_static_sky_banner.jpg"/></div>
			<div id="search">
				<form action="#">
				<span id="city">Enter City</span>
					<input id="textbox" type="text" />
					<input className="btn" type="submit" value="Go" onClick={this.hanClick.bind(this)} />

				</form>
				
		</div>)
		}
	}
};


window.App = App;

