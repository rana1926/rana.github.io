var k2c = k => k - 273.15
var k2r = k => k * 1.8
var k2f = k => k2r(k) - 459.67

Number.prototype.toMaxDecimal = function (d) {
	return +this.toFixed(d) + ''
}

function kCnv(k) {
	return ` ${k2c(k).toMaxDecimal(2)} C°,  ${k2f(k).toMaxDecimal(2)} F°`
}
var WeatherToday=(props)=>(
	<div id="today">
		<h1>{props.wt.city.name+", "+props.wt.city.country}</h1>
		<p>{props.wt.list[0].dt_txt}</p>
		<ul>
			<li>{props.wt.list[0].weather[0].description}</li>
			<li><p className="define">Temperature:</p>{kCnv(props.wt.list[0].main.temp_max)}</li>
			<li><p className="define">Humidity:</p>{props.wt.list[0].main.humidity+"%"}</li>		
		</ul>
		</div>
	);
window.WeatherToday=WeatherToday;