import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



//modulo rutas of my app
import { AppRoutingModule } from './app-routing.module';

//modulo principal
import { AppComponent } from './app.component';

//mis componentes
import { BookListComponent } from './book-list/book-list.component';
import { BookSelectComponent } from './book-select/book-select.component';
import { LinkListComponent } from './link-list/link-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookSelectComponent,
    LinkListComponent,
    HeaderComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
