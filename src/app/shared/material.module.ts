import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule, MatPaginatorModule, MatBadgeModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
