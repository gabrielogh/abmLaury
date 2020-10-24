import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-personas-component',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonaComponent implements OnInit{

  constructor(
    private formBuilder: FormBuilder
    ) {}

    name = 'laury';
    formGroup: FormGroup;

    ngOnInit(): void{
      this.createForm();
    }

    createForm(): void{
      this.formGroup = this.formBuilder.group ({
        nombre: [null],
        apellido: [null],
        tipoDoc: [null],
        numero: [null],
        fechaNac: [null]
      }
      );
    }

}

