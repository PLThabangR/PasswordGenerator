import { Component } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password : string=''
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;
  passwordLength:number=0


  onButtonClick(){
    console.log("Letters",this.includeLetters)
    console.log("Numbers",this.includeNumbers)
    console.log("Symbols",this.includeSymbols)
 this.password="My password"

 this.generatePassword();
 
}
//Checking the change event on the checkbox
onUseLetters(){
console.log("Checked")
 this.includeLetters= !this.includeLetters;
}

//
onUseNumbers(){
  this.includeNumbers= !this.includeNumbers
}
//
onUseSymbols(){
  this.includeSymbols=!this.includeSymbols
}
  //This fucntion check what the user is typing
onChangeLength(event:Event){
const parseValue= parseInt((event.target as HTMLInputElement).value)
//Check if the parsed value is not a Nan
if(!isNaN(parseValue)){
  //Assign the parsed value to our password length
  this.passwordLength=parseValue
}
}

//Logic for generating random
generatePassword(){
 const numbers='1234567890';
 const letters='abcdefghijklmnopqrstuwxyz'
 const symbols ='!@#$%^&*()'

 let validChar=''

  if(this.includeLetters){
    validChar +=letters
  }
  if(this.includeNumbers){
    validChar +=numbers
  }
  if(this.includeSymbols){
    validChar +=symbols
  }

 let generatePassword='';

 for(let i=0 ;i< this.passwordLength;i++){
    //find a random index
    const index = Math.floor(Math.random()*validChar.length)
    generatePassword+= validChar[index]; 
 }
this.password=generatePassword;
}

}


