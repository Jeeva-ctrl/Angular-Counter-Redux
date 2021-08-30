import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyCounterComponent } from './my-counter.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  declarations: [AppComponent, MyCounterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
