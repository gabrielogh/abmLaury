import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MatTableDataSource } from '@angular/material/table';
import {PersonaDTO} from '../../models/persona.model';

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent implements OnInit {
  constructor(
  private formBuilder: FormBuilder
  ) {}
  title = 'Persona';
  name = 'laury';
  persona: PersonaDTO = new PersonaDTO();
  listaPersonas: PersonaDTO[] = [];
  buscarPersona: FormGroup;
  columnas: string[] = ['id', 'nombre', 'apellido', 'tipoDocumento', 'numeroDocumento', 'fechaNacimiento'];
  dataSource = new MatTableDataSource<PersonaDTO>(this.listaPersonas);

  open(): void{
  }

  ngOnInit(): void{
    this.persona.id = 1;
    this.persona.nombre = 'Gabriel';
    this.persona.apellido = 'Gonzalez';
    this.persona.tipoDoc = 1;
    this.persona.nroDoc = 37334541;
    this.persona.fechaNac = null;
    this.listaPersonas.push(this.persona);
    this.createForm();
  }

  createForm(): void{
    this.buscarPersona = this.formBuilder.group ({
      nombre: [null],
      tipoDoc: [null]
    }
    );
  }
}

