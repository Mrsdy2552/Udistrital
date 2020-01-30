 
import {HttpClientModule} from'@angular/common/http';
import { NgModule } from '@angular/core';
import {  } from '@angular/material';
import { 
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
    
    
    
} from '@angular/material';

@NgModule({
    imports:[
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        HttpClientModule,
        MatPaginatorModule,
        MatDialogModule
        
    ],
    exports:[
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        HttpClientModule,
        MatPaginatorModule,
        MatDialogModule 

    ]
})
export class MaterialModule{}