import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  userList: any[] = [
    { id: 1, name: 'Daris' },
    { id: 2, name: 'Kenan' },
    { id: 3, name: 'Aida' },
  ];

  userId: number = 0;
  selectedUser: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id')?.toString());
    this.getProduct();
  }

  getProduct() {
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userId == this.userList[i].id) {
        this.selectedUser = this.userList[i];
      }
    }
  }
}
