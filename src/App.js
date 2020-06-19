import React from 'react';
import API_KEY from './config'
import Form from './components/form';
import Weather from './components/weather';
import Titles from './components/titles'



class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
 
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value; 
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    
 

    if (city) {
      if( data.cod == 404 ){
          this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            id: undefined,
            error: "Input doesn't match any known location!"
          })

      }else{
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          id: data.weather[0].icon,
          error: ""
        })
        console.log(data)
      }
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        id: undefined,
        error: "Please enter a correct value"
      })
    }
   
  } 
  
  render(){
    return (
      
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 title-container">
                  <Titles />
                </div>
                <div className="col-lg-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                    id={this.state.id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;

