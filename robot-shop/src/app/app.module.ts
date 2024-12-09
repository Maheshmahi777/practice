import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { PracticeComponent } from './practice/practice.component';
import { HttpClientModule } from '@angular/common/http';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { CodingExamplesComponent } from './coding-examples/coding-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
    ProductDetailsComponent,
    PracticeComponent,
    OneComponent,
    HeaderComponent,
    FooterComponent,
    SideNavigationComponent,
    MainBodyComponent,
    CodingExamplesComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, TwoComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
