import { SnackBar } from '@nativescript-community/ui-material-snackbar';

const snackbar = new SnackBar();

export function showSimpleSnackbar() {
  snackbar.simple(`I'm a simple snackbar`).then(result => console.log('Simple Snackbar:', result));
}

export function showActionSnackbar(message : string, actionText : string, hideDelayMili : number) {
  snackbar
    .action({
      message: `${message}`,
      actionText: actionText,
      hideDelay: hideDelayMili
    })
    .then(result => console.log('Action Snackbar:', result));
}

export function showColorfulSnackbar(message : string, textColor : string, actionTextColor : string, backgroundColor : string, actionText : string = "X", hideDelay : number = 10000) {
  snackbar
    .action({
      message: `${message}`,
      textColor:  textColor,
      actionTextColor: actionTextColor,
      backgroundColor: backgroundColor,
      actionText: actionText,
      hideDelay: hideDelay
    })
    .then(result => console.log('Action Snackbar:', result));
}
