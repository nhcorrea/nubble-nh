export type ToastType = 'success' | 'error';
export type ToastPosition = 'top' | 'bottom' | 'center';

export interface Toast {
  message: string;
  duration?: number;
  type?: ToastType;
  position: ToastPosition;
  action?: {
    label: string;
    onPress: () => void;
  };
}

export interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hideToast: () => void;
}
