import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule, MatPaginatorModule, MatBadgeModule, MatSortModule, MatMenuModule, MatCardModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatSortModule,
    MatMenuModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatSortModule,
    MatMenuModule,
    MatCardModule,
    MatListModule
  ]
})
export class MaterialModule { }
