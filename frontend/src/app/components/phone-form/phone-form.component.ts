import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhoneService } from '../../services/phone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Phone } from '../../models/phone';

@Component({
  selector: 'app-phone-form',
  standalone: false,
  templateUrl: './phone-form.component.html',
  styleUrl: './phone-form.component.css',
})
export class PhoneFormComponent implements OnInit {
  form: FormGroup;
  id?: number;

  constructor(
    private fb: FormBuilder,
    private svc: PhoneService,
    private route: ActivatedRoute,
    protected router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.01)]],
    });
  }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.svc.get(this.id).subscribe((p) => this.form.patchValue(p));
    }
  }

  save(): void {
    if (this.form.invalid) return;
    const p: Phone = { id: this.id ?? 0, ...this.form.value };
    let action: Observable<any>;
    if (this.id) {
      action = this.svc.update(p);
    } else {
      action = this.svc.create(p);
    }
    action.subscribe(() => this.router.navigate(['/']));
  }
}
