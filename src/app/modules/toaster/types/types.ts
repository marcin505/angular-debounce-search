export enum notifications {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}

export interface Toast {
  type: notifications.SUCCESS | notifications.ERROR | notifications.WARNING;
  title: string;
  body: string;
}
