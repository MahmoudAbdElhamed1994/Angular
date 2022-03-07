import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { DiscountProdComponent } from './discount-prod/discount-prod.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoDiscountProdComponent } from './no-discount-prod/no-discount-prod.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent,
  children:[
    {path:'Discountproducts',component:DiscountProdComponent},
    {path:'NoDiscountproducts',component:NoDiscountProdComponent},
  ]
},
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'comments/:id',component:CommentsComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'**',component:PageNotFountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
