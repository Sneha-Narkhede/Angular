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
  searchResult;

  constructor(private pService: PostService) { }

  ngOnInit() {
    this.pService.getPostDetail()
      .subscribe(data => {
        this.listOfPost = data
        console.log("list of posts = " + this.listOfPost)
        console.log("server data");

      })


  }

  loadData() {
    this.actionType = 1
    console.log("show data");


  }

  showUserId() {
    this.actionType = 2
    //   this.pService.getPostDetail()
    //   .subscribe(data => {
    //     this.listOfUserId = data
    //     console.log("list of posts = "+this.listOfUserId)
    // })
    console.log("user  data");
    // console.log(JSON.stringify(this.listOfPost));

  }
  showTitle() {
    this.actionType = 3
    // this.pService.getPostDetail()
    // .subscribe(data=>{
    //   this.listOfTitle=data})
    console.log("title data");

  }
  onDataSearch() {
    console.log("Search is done");
    this.actionType = 4;
    // this.searchResult = this.listOfPost[0];
    for (let i=0; i<this.listOfPost.length; i++){
      let id = this.listOfPost[i]['id'];

      if(id==5){
        this.searchResult = this.listOfPost[i];
        break;
      }
    }
  }

}
