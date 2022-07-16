import { IconType } from 'react-icons/lib';
import {
  RiBankLine,
  RiBuilding2Line,
  RiDashboardLine,
  RiGroupLine,
  RiSettings4Line,
  RiTruckLine,
  RiUser2Line,
  RiUserLine,
} from 'react-icons/ri';

interface Menu {
  icon: IconType;
  label: string;
  link: string;
  exact?: boolean;
}

const menus: Menu[] = [
  {
    icon: RiDashboardLine,
    label: 'Dashboard',
    link: '/',
    exact: true,
  },
  {
    icon: RiSettings4Line,
    label: 'Pengaturan',
    link: '/setting',
  },
];

export default menus;
