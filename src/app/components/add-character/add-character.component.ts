import { Country } from '@angular-material-extensions/select-country';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { ICountry } from 'src/app/Interfaces/country.interface';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  genders: string[] = ["- - - - - ", "Techno", "House", "Trance", "Drum n Bass", "Hardstyle", "Dubstep", "Garage", "Trap", "Big Room", "Disco"]
  defaultValue: Country = {
    name: 'Deutschland',
    alpha2Code: 'DE',
    alpha3Code: 'DEU',
    numericCode: '276',
    callingCode: '004'
  };
  artistForm: FormGroup
  title = 'ADD ARTIST';
  id: string | null;


  constructor(private formBuild: FormBuilder,
    private changeDetector: ChangeDetectorRef,
    private router: Router,
    private toastr: ToastrService,
    private artistService: CharacterService,
    private paramRouter: ActivatedRoute
  ) {

    this.artistForm = this.formBuild.group({
      name: ["", Validators.required],
      nickname: ["", Validators.required],
      gender: ["", Validators.required],
      age: ["", Validators.required],
      nationality: ["", Validators.required],
      picture: [null]
    })
    this.id = this.paramRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.isEditForm();
  }

  handleSubmit() {
    /* const formData = new FormData();
    formData.append('picture', this.artistForm.get('picture').value); */
    // console.log(this.artistForm)
    const NEW_ARTIST: Character = {
      name: this.artistForm.get('name')?.value,
      nickname: this.artistForm.get('nickname')?.value,
      gender: this.artistForm.get('gender')?.value,
      age: this.artistForm.get('age')?.value,
      nationality: this.artistForm.get('nationality')?.value,
      picture: this.artistForm.get('picture')?.value || "",

    }
    // 'this.id' refers to Url-Params (/:id)
    if (this.id !== null) {
      // Edit artist
      this.artistService.updateArtist(this.id, NEW_ARTIST).subscribe((data) => {
        this.toastr.info('Product successfully updated!', 'Action completed');
        this.router.navigate(['/'])
      }, (error) => {
        console.log(error)
        this.artistForm.reset()
      })
    } else {
      // Add artist
      this.artistService.createArtist(NEW_ARTIST).subscribe(() => {
        console.log('Artist added: ', NEW_ARTIST)
        this.toastr.success('Product successfully added!', 'Success');
        this.router.navigate(['/'])
      }, (error) => {
        console.log(error)
        this.artistForm.reset()
      })
    }

  }
  /* onFileChange(event: any) {
  console.log(event.target.files[0])
  const reader = new FileReader();

  if (event.target.files && event.target.files.length) {
    const [file] = event.target.files;
    // this.artistForm.value["picture"] = file
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.artistForm.patchValue({
        file: reader.result
      });

      // need to run CD since file load runs outside of zone
      this.changeDetector.markForCheck();
    };
    
  }
} */
  isEditForm() {
    // Examine Url-Params for ID, and set that values into the form
    if (this.id !== null) {
      this.title = 'EDIT ARTIST';
      this.artistService.getArtist(this.id).subscribe((data) => {
        console.log("edit data: ", data)
        this.artistForm.setValue({
          name: data.name,
          nickname: data.nickname,
          gender: data.gender,
          age: data.age,
          nationality: data.nationality,
          picture: data.picture || ""
        })
      })
    }
  }
}
