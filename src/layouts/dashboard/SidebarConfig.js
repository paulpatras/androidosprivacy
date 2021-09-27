import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import { CardMedia } from '@mui/material';
import xiaomiPNG from './xiaomi_icon.png';
import huaweiPNG from './huawei_icon.png';
import samsungPNG from './samsung_icon.png';
import realmePNG from './realme-logo.png';
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Xiaomi',
    path: '/dashboard/xiaomi',
    icon: <CardMedia
          style={{height: 22}}
          src={xiaomiPNG}
          component="img"
          />
  },
  {
    title: 'Huawei',
    path: '/dashboard/huawei',
    icon: <CardMedia
          style={{height: 22}}
          src={huaweiPNG}
          component="img"
          />
  },
  {
    title: 'Samsung',
    path: '/dashboard/samsung',
    icon: <CardMedia
          style={{height: 22}}
          src={samsungPNG}
          component="img"
          />
  },
  {
    title: 'Realme',
    path: '/dashboard/realme',
    icon: <CardMedia
          style={{height: 22}}
          src={realmePNG}
          component="img"
          />
  }
];

export default sidebarConfig;
