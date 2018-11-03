import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule, MatPaginatorModule, MatBadgeModule, MatSortModule, MatMenuModule, MatCardModule, MatListModule, MatOptionModule, MatSelectModule } from '@angular/material';

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
    MatListModule,
    MatOptionModule,
    MatSelectModule
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
    MatListModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
