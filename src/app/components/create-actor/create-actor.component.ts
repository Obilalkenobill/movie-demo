import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  actor!:Actor;
isNew:boolean=true;
  constructor(private actorServ:ActorsService, private router: Router, private formBuilder: FormBuilder, private route:ActivatedRoute)
  {
    this.initForm();
  }

  ngOnInit(): void {
    if(this.route.snapshot.params['id'])
    {
      this.isNew= false;
  this.actorServ.getOneByID(this.route.snapshot.params['id']).subscribe(m=>
    {
      this.actor = m;
      this.userForm.patchValue(this.actor);
    });

  }
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
if(this.isNew)
{
    const newActor = new Actor(formVal);
    this.actorServ.addActor(newActor).subscribe(m=>{});
}
   else
   {
     formVal.id=this.actor.id;
     const newActor= new Actor(formVal);
     this.actorServ.updateActor(newActor).subscribe();
   }
    this.router.navigate(['/view_actor']).then(()=>location.reload());
  }

}
