import api from './api';
import toast from './toast';

const utils = {
  setLoggedIn() {
    localStorage.setItem('isLoggedIn', 'true');
  },
  isLoggedIn(): boolean {
    return !!JSON.parse(localStorage.getItem('isLoggedIn') || 'false');
  },
  logout() {
    api.logout().then(() => {
      localStorage.removeItem('isLoggedIn');
      window.location.replace('/login');
    });
  },
  toRp(value: number) {
    return `Rp ${value.toLocaleString('id')}`;
  },
  showToast(message: string, status: 'success' | 'info' | 'warning' | 'error' = 'success') {
    toast({
      status,
      description: message,
      duration: 3000,
      position: 'top',
    });
  },
};

export default utils;
