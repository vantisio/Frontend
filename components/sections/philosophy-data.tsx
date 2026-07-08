/**
 * Philosophy Data Component (Server Component)
 * 
 * Contains the data structure for philosophy principles.
 * This is a Server Component that can be statically rendered.
 */

import { Principle } from '@/types';

export const philosophyPrinciples: Principle[] = [
  {
    title: 'مهندسی اول',
    description: 'هر تصمیم از اصول مهندسی ناشی می‌شود. ما کیفیت را فدای سرعت نمی‌کنیم.',
    icon: 'Cpu',
  },
  {
    title: 'تفکر بلندمدت',
    description: 'ما برای دهه آینده می‌سازیم، نه فقط برای امروز. پایداری در DNA ماست.',
    icon: 'TrendingUp',
  },
  {
    title: 'دقت در همه چیز',
    description: 'از طراحی تا اجرا، هر جزئیت با دقت بررسی می‌شود. هیچ چیز تصادفی نیست.',
    icon: 'Target',
  },
  {
    title: 'امنیت توسط طراحی',
    description: 'امنیت یک افزونه نیست. از روز اول در معماری سیستم تعبیه شده است.',
    icon: 'Shield',
  },
  {
    title: 'کارایی اولویت است',
    description: 'سیستم‌هایی که می‌سازیم باید سریع، کارآمد و بهینه باشند.',
    icon: 'Zap',
  },
  {
    title: 'معماری مقیاس‌پذیر',
    description: 'سیستم‌هایی که با رشد کسب‌وکار، بدون مشکل مقیاس می‌یابند.',
    icon: 'Layers',
  },
];
