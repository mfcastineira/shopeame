import { HttpRequestService } from './../../shared/services/http-request.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductosContentsComponent } from './components/productos-contents/productos-contents.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProductosContentsComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [HttpRequestService]

})
export class ProductsModule { }
