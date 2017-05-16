import React, { Component } from 'react';

var API = 'AIzaSyDNlx2z4BOM7IQSnXY5GE3ZU1M7D7Vklp4'
var channelId = 'UCXgGY0wkgOzynnHvSEVmE3A';
var results = 5;
var q = 'react';

var finalURL='https://www.googleapis.com/youtube/v3/search?key='+API+'&channelId='+channelId+'&part=snippet,id&order=date&'+'maxResults='+results+'&q'+q;

class Youtube extends Component {

  constructor(props){
  super(props);

  this.state={
    resultyt:[]
  };
    this.clicked=this.clicked.bind(this);
  }

  clicked(){
    //source: http://facebook.github.io/react-native/docs/network.html
    fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        const resultyt = responseJson.items.map(obj=>"https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    console.log(finalURL);
    console.log(this.state.resultyt);
    return (
      // only allowed to have one main div
      <div>
            <button onClick={this.clicked}>Click Here to Fetch For Youtube Videos</button>
            {
            this.state.resultyt.map((link, i)=>{
              console.log(link);
              var frame = <div key={i} className="Youtube"><iframe width="470" height="270" src={link}
              frameBorder="0"allowFullScreen></iframe></div>
              return frame;
            })

            }
{this.frame}
      </div>
    );
  }
}

export default Youtube;
