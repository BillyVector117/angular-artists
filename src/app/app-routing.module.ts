import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// Components
import { GetCharacterComponent } from './components/get-character/get-character.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

const routes: Routes = [
  { path: "", component: GetCharacterComponent },
  { path: "add-character", component: AddCharacterComponent },
  { path: "add-character/:id", component: AddCharacterComponent }, // update
  { path: "**", redirectTo: "", pathMatch: 'full' },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
