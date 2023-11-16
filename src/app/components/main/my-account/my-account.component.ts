import { Component } from '@angular/core';
import {TopUpComponent} from "./modals/top-up/top-up.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SendMoneyComponent} from "./modals/send-money/send-money.component";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {

  constructor(public dialog: MatDialog){

  }

  top_up_account() {
    const cdialogRef = this.dialog.open(TopUpComponent, {
      height: 'maxContentHeight',
      panelClass: ['lg:w-[30%]', 'w-full'],
    });
    cdialogRef.afterClosed().subscribe((result) => {
      if (result.success) {
      }
    });
  }

   send_money() {
    const cdialogRef = this.dialog.open(SendMoneyComponent, {
      height: 'maxContentHeight',
      panelClass: ['lg:w-[30%]', 'w-full'],
    });
    cdialogRef.afterClosed().subscribe((result) => {
      if (result.success) {
      }
    });
  }

}
