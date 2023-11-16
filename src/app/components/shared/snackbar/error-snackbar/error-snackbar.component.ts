import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-snackbar',
  templateUrl: './error-snackbar.component.html',
  styleUrls: ['./error-snackbar.component.scss']
})
export class ErrorSnackbarComponent implements OnInit {
  error_message: string= 'An error has occurred'

  constructor(public sbRef: MatSnackBarRef<ErrorSnackbarComponent>,
              @Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }

  ngOnInit(): void {

  }

  dismiss(){
    this.sbRef.dismiss();
  }
}
