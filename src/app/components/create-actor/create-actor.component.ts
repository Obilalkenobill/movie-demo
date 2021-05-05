import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Actor } from 'src/app/Model/Actor.model';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.scss']
})
export class CreateActorComponent implements OnInit {

userForm!: FormGroup;
  first_nameCtl!: FormControl;
  last_nameCtl!: FormControl;

  constructor(private actorServ:ActorsService, private router: Router, private formBuilder: FormBuilder)
  {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm(): void
  {
    this.first_nameCtl = this.formBuilder.control('', [Validators.required, Validators.minLength(5)]);
    this.last_nameCtl = this.formBuilder.control('', [Validators.required, Validators.minLength(5), this.checklast_name()]);

    this.userForm = this.formBuilder.group({
      first_name: this.first_nameCtl,
      last_name: this.last_nameCtl
    });
  }

  checklast_name(): ValidatorFn
  {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const last_name = control.value;
      /*
      if(last_name === this.first_nameCtl.value)
      {
        return true
      }
      return null;
      */
      return last_name === this.first_nameCtl.value
        && (!control.hasError('required')) ?
          {forbidden: {value: 'last_name and first_name are equals'}} : null;
    };
  }

  onSubmit()
  {
    const formVal = this.userForm.value;

    console.log("first_name : " + formVal.first_name + " last_name : " + formVal.last_name);
    const newActor = new Actor(formVal);
    console.log(newActor);
    this.actorServ.addActor(newActor).subscribe(m=>{});
    this.router.navigate(['/view_actor']).then(()=>location.reload());
  }

}
