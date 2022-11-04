import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent  {

  imageUrl:String="../assets/harsh.jpeg"
  skill=['JavaScript','AngularJs','Nodejs','ExpressJs','MongoDB','CSS','HTML']
  
 skills=[
   {
     frontend:['HTML','CSS','JavaScript','Bootstrap','Angular'],
     backend:['Node.js','Express,js'],
     programming:['C','C++'],
     database:['MongoDB'],
     lang:['Hindi(Mother Tangue)','English'],
     tools:['Visual Studio Code','Eclipse ID','Git','Postman','Windows']
   }

  ]
}
