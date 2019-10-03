import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public listOfPost = [];
  listOfUserId = [];
  listOfTitle = [];
  actionType;

  constructor(private pService: PostService) { }

  ngOnInit() {
    this.pService.getPostDetail()
    .subscribe(data => {
      this.listOfPost = data
      console.log("list of posts = "+this.listOfPost)
    })

    
  }

  loadData(){
    this.actionType=1
    
  }
  
  showUserId(){
    this.actionType=2
    // this.pService.getPostDetail()
    // .subscribe(data => {
    //   this.listOfUserId = data
    //   console.log("list of posts = "+this.listOfUserId)
  // })
}
showTitle(){
  this.actionType=3
  // this.pService.getPostDetail()
  // .subscribe(data=>{
  //   this.listOfTitle=data})
}

}
