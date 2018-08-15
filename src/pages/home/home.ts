import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Flashlight} from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

isOn:boolean;
status:string;
  constructor(public navCtrl: NavController,private platform:Platform,private flash:Flashlight) {
    
this.platform.ready().then(() =>{

  this.updateFlashLightStatus();
})

  }
switchOn(){
  this.flash.switchOn();
  this.updateFlashLightStatus();
  this.showStatus()
}
switchOff(){
  this.flash.switchOff();
  this.updateFlashLightStatus();
  this.showStatus()
}
toggle(){
  this.flash.toggle();
  this.updateFlashLightStatus();
}
updateFlashLightStatus(){
this.isOn=this.flash.isSwitchedOn();
}
showStatus(){


}
showstatus(){
if( this.isOn==true){
  this.status='on'
}
else{
  this.status='Off'
}
}
}

