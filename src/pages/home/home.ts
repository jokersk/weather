import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts :any ;
  currentCity : string;
  weatherData : any;
  currentTem : any;
  realTime : string;
  constructor(public navCtrl: NavController, private http:Http) {
    this.http.get("http://api.jirengu.com/weather.php")
    .map(res=>res.json()).subscribe(data=>{
    
    	this.currentCity = data.results[0].currentCity;
    	this.weatherData = data.results[0].weather_data;
    	this.currentTem = this.weatherData[0].date;
    	// console.log(this.weatherData)
      this.realTime = this.getRealTime(this.currentTem);
    })
  }

  getRealTime(str:string)
  {
    var output:any;
    output =  str.match(/实时\D*(\d*[^\)]*)/);
    output = output[1];
    // console.log(output)
    return output;
  }

}
