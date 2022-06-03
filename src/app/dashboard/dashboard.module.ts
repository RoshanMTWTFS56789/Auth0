import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AdminComponent, SuperadminComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [AdminComponent, SuperadminComponent],
})
export class DashboardModule {}
