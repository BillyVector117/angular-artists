import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-get-character',
  templateUrl: './get-character.component.html',
  styleUrls: ['./get-character.component.css']
})
export class GetCharacterComponent implements OnInit {
  listArtists: Character[] = [];
  constructor(private artistService: CharacterService, private toastr: ToastrService) { }

  ngOnInit(): void {
    // Starting Component...
    this.getArtists();
  }

  getArtists() {
    this.artistService.getArtists().subscribe(data => {
      console.log("Getting artists: ", data)
      this.listArtists = data
    }, error => {
      console.log(error)
    })
  }

  deleteArtist(id: any) {
    this.artistService.deleteArtist(id).subscribe(() => {
      this.toastr.error('Action complete', "Successfully deleted!");
      this.getArtists();
    }, error => {
      console.log(error)
    })
  }
}
