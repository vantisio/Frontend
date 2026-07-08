'use client';

import { DocHero } from '@/components/documentation/doc-hero';
import { DocSection } from '@/components/documentation/doc-section';
import { Callout } from '@/components/documentation/callout';
import { FeatureGrid } from '@/components/documentation/feature-grid';
import { TechStackGrid } from '@/components/documentation/tech-stack-grid';
import { Timeline } from '@/components/documentation/timeline';
import { FAQ } from '@/components/documentation/faq';
import { SpecTable } from '@/components/documentation/spec-table';
import { DocumentationLayout } from '@/components/layouts/documentation-layout';
import { NavItem } from '@/components/documentation/doc-sidebar';

const navigation: NavItem[] = [
  {
    id: 'introduction',
    title: 'مقدمه',
    items: [
      { id: 'introduction', title: 'معرفی' },
      { id: 'executive-summary', title: 'خلاصه مدیریتی' },
      { id: 'vision', title: 'چشم‌انداز' },
    ],
  },
  {
    id: 'market',
    title: 'بازار',
    items: [
      { id: 'problem-statement', title: 'بیان مسئله' },
      { id: 'market-analysis', title: 'تحلیل بازار' },
      { id: 'competitive-analysis', title: 'تحلیل رقابتی' },
    ],
  },
  {
    id: 'product',
    title: 'محصول',
    items: [
      { id: 'product-overview', title: 'نمای کلی محصول' },
      { id: 'technology-stack', title: 'تکنولوژی‌ها' },
      { id: 'architecture', title: 'معماری سیستم' },
      { id: 'infrastructure', title: 'زیرساخت' },
    ],
  },
  {
    id: 'business',
    title: 'تجاری',
    items: [
      { id: 'business-model', title: 'مدل کسب‌وکار' },
      { id: 'revenue-model', title: 'مدل درآمدی' },
      { id: 'investment-opportunity', title: 'فرصت سرمایه‌گذاری' },
    ],
  },
  {
    id: 'development',
    title: 'توسعه',
    items: [
      { id: 'roadmap', title: 'نقشه راه' },
      { id: 'timeline', title: 'جدول زمانی' },
      { id: 'risk-assessment', title: 'ارزیابی ریسک' },
    ],
  },
  {
    id: 'appendix',
    title: 'پیوست',
    items: [
      { id: 'contact', title: 'تماس' },
    ],
  },
];

export default function CoreDocsPage() {
  return (
    <>
      <DocumentationLayout navigation={navigation}>
        <DocHero
          title="مستندات سرمایه‌گذاری Vantis Core"
          description="مستندات کامل و محرمانه برای سرمایه‌گذاران و شرکای استراتژیک"
          badge="محرمانه"
        />

        <DocSection id="introduction" title="معرفی">
          <p className="font-persian text-text-secondary leading-relaxed">
            این مستندات اطلاعات جامع و محرمانه در مورد Vantis Core، فرصت‌های سرمایه‌گذاری، و چشم‌انداز آینده شرکت را ارائه می‌دهد.
          </p>
        </DocSection>

        <DocSection id="executive-summary" title="خلاصه مدیریتی">
          <Callout type="info">
            <p>
              خلاصه مدیریتی به زودی تکمیل خواهد شد.
            </p>
          </Callout>
        </DocSection>

        <DocSection id="vision" title="چشم‌انداز">
          <Callout type="success">
            <p>
              چشم‌انداز و ماموریت شرکت به زودی تکمیل خواهد شد.
            </p>
          </Callout>
        </DocSection>

        <DocSection id="problem-statement" title="بیان مسئله">
          <Callout type="warning">
            <p>
              بیان مسئله و تحلیل بازار به زودی تکمیل خواهد شد.
            </p>
          </Callout>
        </DocSection>

        <DocSection id="market-analysis" title="تحلیل بازار">
          <p className="font-persian text-text-secondary leading-relaxed">
            تحلیل بازار و فرصت‌های موجود به زودی تکمیل خواهد شد.
          </p>
        </DocSection>

        <DocSection id="competitive-analysis" title="تحلیل رقابتی">
          <p className="font-persian text-text-secondary leading-relaxed">
            تحلیل رقابتی و مزیت‌های رقابتی به زودی تکمیل خواهد شد.
          </p>
        </DocSection>

        <DocSection id="product-overview" title="نمای کلی محصول">
          <p className="font-persian text-text-secondary leading-relaxed">
            نمای کلی محصول و ویژگی‌های کلیدی به زودی تکمیل خواهد شد.
          </p>
        </DocSection>

        <DocSection id="technology-stack" title="تکنولوژی‌ها">
          <TechStackGrid
            items={[
              { name: 'TypeScript', category: 'زبان برنامه‌نویسی' },
              { name: 'Node.js', category: 'Runtime' },
              { name: 'PostgreSQL', category: 'دیتابیس' },
              { name: 'Redis', category: 'Cache' },
              { name: 'Kafka', category: 'Message Queue' },
              { name: 'GraphQL', category: 'API' },
            ]}
          />
        </DocSection>

        <DocSection id="architecture" title="معماری سیستم">
          <p className="font-persian text-text-secondary leading-relaxed mb-6">
            معماری سیستم و طراحی به زودی تکمیل خواهد شد.
          </p>
          <SpecTable
            rows={[
              { label: 'نوع معماری', value: 'میکروسرویس' },
              { label: 'پروتکل ارتباطی', value: 'REST / gRPC' },
              { label: 'مدل داده', value: 'توزیع‌شده' },
              { label: 'کشف سرویس', value: 'خودکار' },
              { label: 'بارگذاری', value: 'توزیع‌شده' },
            ]}
          />
        </DocSection>

        <DocSection id="infrastructure" title="زیرساخت">
          <p className="font-persian text-text-secondary leading-relaxed mb-6">
            جزئیات زیرساخت به زودی تکمیل خواهد شد.
          </p>
          <SpecTable
            rows={[
              { label: 'پلتفرم‌های ابری', value: 'AWS, GCP, Azure' },
              { label: 'Container', value: 'Docker, Kubernetes' },
              { label: 'CI/CD', value: 'خودکار' },
              { label: 'مانیتورینگ', value: 'Prometheus, Grafana' },
              { label: 'Logging', value: 'ELK Stack' },
            ]}
          />
        </DocSection>

        <DocSection id="business-model" title="مدل کسب‌وکار">
          <Callout type="info">
            <p>
              مدل کسب‌وکار به زودی تکمیل خواهد شد.
            </p>
          </Callout>
        </DocSection>

        <DocSection id="revenue-model" title="مدل درآمدی">
          <Callout type="info">
            <p>
              مدل درآمدی به زودی تکمیل خواهد شد.
            </p>
          </Callout>
        </DocSection>

        <DocSection id="investment-opportunity" title="فرصت سرمایه‌گذاری">
          <Callout type="success">
            <p>
              فرصت‌های سرمایه‌گذاری به زودی تکمیل خواهد شد.
            </p>
          </Callout>
        </DocSection>

        <DocSection id="roadmap" title="نقشه راه">
          <Timeline
            items={[
              {
                date: 'Q2 2026',
                title: 'انتشار نسخه 1.0',
                description: 'انتشار اولیه با ویژگی‌های اصلی',
                status: 'completed',
              },
              {
                date: 'Q3 2026',
                title: 'بهبود عملکرد',
                description: 'بهینه‌سازی و افزایش سرعت',
                status: 'in-progress',
              },
              {
                date: 'Q4 2026',
                title: 'ویژگی‌های پیشرفته',
                description: 'افزودن قابلیت‌های جدید',
                status: 'planned',
              },
              {
                date: 'Q1 2027',
                title: 'مقیاس‌پذیری بیشتر',
                description: 'پشتیبانی از مقیاس‌های بزرگتر',
                status: 'planned',
              },
            ]}
          />
        </DocSection>

        <DocSection id="timeline" title="جدول زمانی">
          <p className="font-persian text-text-secondary leading-relaxed">
            جدول زمانی دقیق به زودی تکمیل خواهد شد.
          </p>
        </DocSection>

        <DocSection id="risk-assessment" title="ارزیابی ریسک">
          <Callout type="warning">
            <p>
              ارزیابی ریسک و استراتژی‌های کاهش ریسک به زودی تکمیل خواهد شد.
            </p>
          </Callout>
        </DocSection>

        <DocSection id="contact" title="تماس">
          <Callout type="info">
            <p>
              برای اطلاعات بیشتر و درخواست جلسه، لطفاً با تیم سرمایه‌گذاری ما تماس بگیرید.
            </p>
          </Callout>
        </DocSection>
      </DocumentationLayout>
    </>
  );
}
