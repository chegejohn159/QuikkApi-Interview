import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'app-success-snackbar',
  templateUrl: './success-snackbar.component.html',
  styleUrls: ['./success-snackbar.component.scss']
})
export class SuccessSnackbarComponent implements OnInit {

  constructor(public sbRef: MatSnackBarRef<SuccessSnackbarComponent>,
              @Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  dismiss(){
    this.sbRef.dismiss();
  }

}
