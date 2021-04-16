import React, { Component } from 'react'
import config from "./config.js"


class Newsfeed extends Component {
   constructor(props) {
   super(props)
   this.pair = []
   this.state = {
   headline1 : '', imgsrc1: '', headline2: '', imgsrc2: '', headline3: '', imgsrc3: '', headline4: '', imgsrc4: '', headline5: '', imgsrc5: '', headline6: '', imgsrc6: '', headline7: '', imgsrc7: '', headline8: '', imgsrc8: '', headline9: '', imgsrc9: ''
   }
  }

  componentDidMount() {

  fetch(`https://content.guardianapis.com/search?api-key=${config.[0]}&show-fields=thumbnail`)
    .then(data => data.json())
    .then((data) => {
      this.setState({headline1: data.response.results.[0].webTitle})
      this.setState({headline2: data.response.results.[1].webTitle})
      this.setState({headline3: data.response.results.[2].webTitle})
      this.setState({headline4: data.response.results.[3].webTitle})
      this.setState({headline5: data.response.results.[4].webTitle})
      this.setState({headline6: data.response.results.[5].webTitle})
      this.setState({headline7: data.response.results.[6].webTitle})
      this.setState({headline8: data.response.results.[7].webTitle})
      this.setState({headline9: data.response.results.[8].webTitle})
      this.setState({headline10: data.response.results.[9].webTitle})
      this.setState({imgsrc1: data.response.results.[0].fields.thumbnail})
      this.setState({imgsrc2: data.response.results.[1].fields.thumbnail})
      this.setState({imgsrc3: data.response.results.[2].fields.thumbnail})
      this.setState({imgsrc4: data.response.results.[3].fields.thumbnail})
      this.setState({imgsrc5: data.response.results.[4].fields.thumbnail})
      this.setState({imgsrc6: data.response.results.[5].fields.thumbnail})
      this.setState({imgsrc7: data.response.results.[6].fields.thumbnail})
      this.setState({imgsrc8: data.response.results.[7].fields.thumbnail})
      this.setState({imgsrc9: data.response.results.[8].fields.thumbnail})
      this.setState({imgsrc10: data.response.results.[9].fields.thumbnail})
  })

  fetch("https://cors-anywhere.herokuapp.com/https://api.aylien.com/news/stories", {
    headers: {
      "X-Aylien-Newsapi-Application-Id": `${config.[1]}`,
      "X-Aylien-Newsapi-Application-Key": `${config.[2]}`
    }
  })
  .then(data => data.json())
  .then((data) => {
    console.log(data)
  })
}

  render() {

  return(
  <div>
<h1> {this.state.headline1} </h1>
<img src={this.state.imgsrc1}/>

<h1> {this.state.headline2} </h1>
<img src={this.state.imgsrc2}/>

<h1> {this.state.headline3} </h1>
<img src={this.state.imgsrc3}/>

<h1> {this.state.headline4} </h1>
<img src={this.state.imgsrc4}/>

<h1> {this.state.headline5} </h1>
<img src={this.state.imgsrc5}/>

<h1> {this.state.headline6} </h1>
<img src={this.state.imgsrc6}/>


<h1> {this.state.headline7} </h1>
<img src={this.state.imgsrc7}/>

<h1> {this.state.headline8} </h1>
<img src={this.state.imgsrc8}/>

<h1> {this.state.headline9} </h1>
<img src={this.state.imgsrc9}/>

<h1> {this.state.headline10} </h1>
<img src={this.state.imgsrc10}/>

  </div>
  )
  }
}

export default Newsfeed
