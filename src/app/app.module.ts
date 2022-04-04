import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactHeaderComponent } from './components/contact-header/contact-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticlesContainerComponent } from './components/articles-container/articles-container.component';



const appRoutes: Routes = [
  {path:'', component: MainComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ContactHeaderComponent,
    MainComponent,
    NavbarComponent,
    ArticleCardComponent,
    ArticlesContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
