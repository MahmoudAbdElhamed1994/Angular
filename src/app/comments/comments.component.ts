import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../services/comments.service';
import { IComment } from '../shared Classes and types/Shared';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  Comments:IComment[]=[];

  constructor(private comments:CommentsService,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.activeroute.snapshot.paramMap.get('id')??'';
    this.comments.getcomments(id).subscribe(data=>{
      this.Comments=data;
    });
  }

}
