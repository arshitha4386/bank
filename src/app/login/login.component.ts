import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
    data="your perfect banking partner"
    data1="Enter Account Number"
    acno:any
    // or
    psw=""
  userDetails:any={   
     1000:{username:"anu",acno:1000,password:"abc123",balance:0},
    1001:{username:"amal",acno:1001,password:"abc123",balance:0},
    1002:{username:"arun",acno:1002,password:"abc123",balance:0},
    1003:{username:"aishu",acno:1003,password:"abc123",balance:0},
    1004:{username:"ammu",acno:1004,password:"abc123",balance:0},
    1005:{username:"arjun",acno:1005,password:"abc123",balance:0},
}
login(){
  var acnum=this.acno
  var userDetails=this.userDetails
  var psw=this.psw
  // alert('login worked')
  if(acnum in userDetails){
    if(psw==userDetails[acnum]["password"]){
      alert("login success")
    }
    else{
      alert("incorrect password")
    }

  }
  else{
    alert('incorrect acnum or not registered')
  }
}
// acnoChange(event:any){
//   this.acno=event.target.value
//   }
//   pswChange(event:any){
//     this.psw=event.target.value
//   }

  // }
//   login(acnum:any,psw:any){
//     var acnum=acnum.value
//     var userDetails=this.userDetails
//     var psw=psw.value
//     // alert('login worked')
//     if(acnum in userDetails){
//       if(psw==userDetails[acnum]["password"]){
//         alert("login success")
//       }
//       else{
//         alert("incorrect password")
//       }
  
//     }
//     else{
//       alert('incorrect acnum or not registered')
//     }
//   }  
}