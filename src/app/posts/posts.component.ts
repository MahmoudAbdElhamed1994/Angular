import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { IPost } from '../shared Classes and types/Shared';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postes:IPost[];

  constructor(private postsservice:PostsService,private router:Router) { 
    this.postes=[];
  }

  ngOnInit(): void {
    this.postsservice.getPosts().subscribe(
      data =>{
        this.postes=data;
      }
    )
  }
  showComments(id:number){
    this.router.navigate(['/comments',id]);
  }

}
