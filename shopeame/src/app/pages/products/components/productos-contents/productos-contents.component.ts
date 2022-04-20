import { HttpRequestService } from './../../../../shared/services/http-request.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-productos-contents',
  templateUrl: './productos-contents.component.html',
  styleUrls: ['./productos-contents.component.scss']
})
export class ProductosContentsComponent implements OnInit {
 private URL: string="https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products";
 public dataInf: any=[];
 public title:string= "Productos"

constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    this.recoverProducts();
  }

  public recoverProducts(){
    this.httpRequestService.getData(this.URL).subscribe((data:any)=>{
    this.dataInf = data;
    })
  }

}
