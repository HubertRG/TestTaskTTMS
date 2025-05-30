import { Component, OnInit } from '@angular/core';
import { Phone } from '../../models/phone';
import { PhoneService } from '../../services/phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-list',
  standalone: false,
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css',
})
export class PhoneListComponent implements OnInit {
  phones: Phone[] = [];

  constructor(private svc: PhoneService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.svc.getAll().subscribe((data) => (this.phones = data));
  }

  delete(id: number): void {
    if (!confirm('Usunąć numer?')) return;
    this.svc.delete(id).subscribe(() => this.load());
  }

  edit(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  create(): void {
    this.router.navigate(['/new']);
  }
}
