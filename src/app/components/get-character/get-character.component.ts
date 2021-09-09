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
  artistNames: any[] = [];
  constructor(private artistService: CharacterService, private toastr: ToastrService) { }

  ngOnInit(): void {
    // Starting Component...
    this.getArtists();
  }

  getArtists() {
    this.artistService.getArtists().subscribe(data => {
      console.log("Getting artists: ", data)
      this.listArtists = data
      // Creating an array with only artist names (to search picture throught External API)
      this.listArtists.forEach((artist) => {
        this.artistNames.push(artist.nickname)
      })
      console.log(this.artistNames)
      this.getArtistPicture(this.artistNames)
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
  getArtistPicture(artistNames: string[]) {
    this.listArtists.forEach((artist) => {
      // artistNames contains only NAMES as items
      artistNames.forEach((name) => {
        if (name == artist.nickname) {
          this.artistService.getArtistPicture(name).subscribe((data) => {
            console.log("fetching data for ", artist, data.artists[0])
            artist.picture = data.artists[0].strArtistThumb
          }, error => { console.log(error)})
          artist.picture
        }
      })
      if (this.artistNames.includes(artist.nickname)) {
        console.log("ok")

      }
    })
  /*   artistNames.forEach((artist) => {
      this.artistService.getArtistPicture(artist).subscribe((data) => {
        console.log("fetching data for ", artist, data.artists)

      })
    }) */
  }
}
