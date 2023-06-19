import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebarOpen: boolean = false;
  isFormOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;

    // Close the form when the sidebar is closed
    if (!this.isSidebarOpen) {
      this.isFormOpen = false;
    }
  }

  openForm() {
    this.isFormOpen = true;
  }
}
