import {create} from 'zustand';

import {ToastService} from './ToastTypes';

const useToastStore = create<ToastService>(set => ({
  toast: null,
  showToast: toast => set({toast}),
  hideToast: () => set({toast: null}),
}));

export function useToastZustand(): Pick<ToastService, 'toast'> {
  const toast = useToastStore(state => state.toast);
  return {toast};
}

export function useToastServiceZustand(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  const showToast = useToastStore(state => state.showToast);
  const hideToast = useToastStore(state => state.hideToast);

  return {showToast, hideToast};
}
