import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/interfaces/item';
import { NombresService } from 'src/app/services/nombres.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nombres: Item[] = [];
  reg_show: number = 10;

  constructor(
    private nServece: NombresService,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {
    //this.toastr.success('Hello world!', 'Toastr fun!');
  }

  getListaNombres(nameSearch: string){
    let min_value = new FormControl(nameSearch,Validators.minLength(4));
    if(min_value.errors){
      this.toastr.error("el texto de búsqueda debe tener un mínimo de 4 caracteres");
      return;
    }
    let filter_w = new FormControl(nameSearch, Validators.pattern('[^doublevpartners].+'));
    console.log(filter_w.errors);
    if(filter_w.errors){
      this.toastr.error("NO es permitido realizar la búsqueda de la palabra 'doublevpartners'");
      return;
    }
    this.nServece.getNombres(nameSearch).subscribe((data: Item[]) => {
      this.nombres = data.slice(0,this.reg_show);
    })
  }
}
