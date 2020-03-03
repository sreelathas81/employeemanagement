import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../data.json';
import { ActivatedRoute , Params, Router, ActivatedRouteSnapshot, ParamMap} from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private active:ActivatedRoute,private route:Router) {}
    
    public finalName;
    public id:number;
    public previousId
    public previousName:string;
    public nextStatus=1;
  details: any = (data as any).default;

  ngOnInit() {
    //let aaa=this.active.snapshot.paramMap.get('name');
    //this.finalName=aaa;
    this.active.paramMap.subscribe((params:ParamMap)=>{
    let aaa=params.get('name');
    this.finalName=aaa;
    });
  
    for( let index of this.details){
      if(index.name==this.finalName){
        this.id=index.id;
      
    }
    }
  }
    
    previous(){
      for(let ind of this.details){
        if((this.id-1)===ind.id){
      this.previousName=ind.name;}}
      this.route.navigate(['/details',this.previousName]);
    }
    next(){

    }

}
