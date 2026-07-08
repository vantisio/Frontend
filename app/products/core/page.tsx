import { Metadata } from 'next';
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
    id: 'overview',
    title: 'معرفی محصول',
    items: [
      { id: 'overview', title: 'نمای کلی' },
      { id: 'problem', title: 'مسئله' },
      { id: 'solution', title: 'راه‌حل' },
    ],
  },
  {
    id: 'features',
    title: 'ویژگی‌ها',
    items: [
      { id: 'key-features', title: 'ویژگی‌های کلیدی' },
      { id: 'architecture', title: 'معماری' },
      { id: 'infrastructure', title: 'زیرساخت' },
    ],
  },
  {
    id: 'technical',
    title: 'فنی',
    items: [
      { id: 'tech-stack', title: 'تکنولوژی‌ها' },
      { id: 'security', title: 'امنیت' },
      { id: 'scalability', title: 'مقیاس‌پذیری' },
      { id: 'performance', title: 'عملکرد' },
    ],
  },
  {
    id: 'roadmap',
    title: 'نقشه راه',
    items: [
      { id: 'roadmap', title: 'توسعه' },
      { id: 'faq', title: 'سوالات متداول' },
    ],
  },
];

export const metadata: Metadata = {
  title: 'Vantis Core - مستندات محصول',
  description: 'پلتفرم زیرساختی که اتوماسیون سازمانی را در مقیاس بزرگ ممکن می‌کند. با معماری میکروسرویس و قابلیت مقیاس‌پذیری افقی، Core می‌تواند میلیون‌ها درخواست را در ثانیه پردازش کند.',
  keywords: ['وانتس', 'Vantis Core', 'زیرساخت', 'میکروسرویس', 'اتوماسیون', 'مقیاس‌پذیری'],
  authors: [{ name: 'Vantis' }],
  creator: 'Vantis',
  publisher: 'Vantis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vantis.io'),
  alternates: {
    canonical: '/products/core',
  },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://vantis.io/products/core',
    title: 'Vantis Core - مستندات محصول',
    description: 'پلتفرم زیرساختی که اتوماسیون سازمانی را در مقیاس بزرگ ممکن می‌کند',
    siteName: 'Vantis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vantis Core - مستندات محصول',
    description: 'پلتفرم زیرساختی که اتوماسیون سازمانی را در مقیاس بزرگ ممکن می‌کند',
    creator: '@vantis',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CoreProductPage() {
  return (
    <DocumentationLayout navigation={navigation}>
      <DocHero
        title="Vantis Core"
        description="پلتفرم زیرساختی که اتوماسیون سازمانی را در مقیاس بزرگ ممکن می‌کند. با معماری میکروسرویس و قابلیت مقیاس‌پذیری افقی، Core می‌تواند میلیون‌ها درخواست را در ثانیه پردازش کند."
        badge="زیرساخت"
      />

      <DocSection id="overview" title="نمای کلی">
        <p className="font-persian text-text-secondary leading-relaxed">
          Vantis Core یک پلتفرم زیرساختی مدرن است که برای مدیریت و اتوماسیون عملیات سازمانی در مقیاس بزرگ طراحی شده است. این سیستم با استفاده از معماری میکروسرویس و تکنولوژی‌های پیشرفته، قابلیت پردازش میلیون‌ها درخواست در ثانیه را فراهم می‌کند.
        </p>
      </DocSection>

      <DocSection id="problem" title="مسئله">
        <Callout type="warning" title="چالش">
          <p>
            سازمان‌های مدرن با چالش‌های متعددی در مدیریت زیرساخت و اتوماسیون عملیات مواجه هستند. سیستم‌های سنتی نمی‌توانند با مقیاس درخواست‌های رو به رشد همگام شوند و منجر به کاهش کارایی و افزایش هزینه‌ها می‌شوند.
          </p>
        </Callout>
      </DocSection>

      <DocSection id="solution" title="راه‌حل">
        <Callout type="success" title="راه‌حل Vantis Core">
          <p>
            Vantis Core با معماری مقیاس‌پذیر و توزیع‌شده، این چالش‌ها را حل می‌کند. سیستم قابلیت مقیاس‌پذیری افقی خودکار، مدیریت هوشمند منابع، و یکپارچگی با سیستم‌های موجود را فراهم می‌کند.
          </p>
        </Callout>
      </DocSection>

      <DocSection id="key-features" title="ویژگی‌های کلیدی">
        <FeatureGrid
          features={[
            {
              title: 'مقیاس‌پذیری افقی',
              description: 'افزایش خودکار ظرفیت بر اساس بار درخواست‌ها',
            },
            {
              title: 'میکروسرویس',
              description: 'معماری سرویس‌محور برای انعطاف‌پذیری بالا',
            },
            {
              title: 'پردازش بلادرنگ',
              description: 'پردازش رویدادها در زمان واقعی با تأخیر کم',
            },
            {
              title: 'مدیریت منابع',
              description: 'تخصیص هوشمند منابع بر اساس نیاز',
            },
            {
              title: 'یکپارچگی',
              description: 'اتصال آسان با سیستم‌های موجود',
            },
            {
              title: 'مانیتورینگ',
              description: 'نظارت جامع بر عملکرد و سلامت سیستم',
            },
          ]}
        />
      </DocSection>

      <DocSection id="architecture" title="معماری">
        <p className="font-persian text-text-secondary leading-relaxed mb-6">
          Vantis Core از معماری میکروسرویس استفاده می‌کند که هر سرویس به صورت مستقل عمل می‌کند و از طریق API با هم ارتباط برقرار می‌کنند.
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
          سیستم قابلیت استقرار در محیط‌های مختلف از جمله ابری، خصوصی و ترکیبی را دارد.
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

      <DocSection id="tech-stack" title="تکنولوژی‌ها">
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

      <DocSection id="security" title="امنیت">
        <Callout type="info" title="امنیت در لایه‌های مختلف">
          <p>
            Vantis Core از استانداردهای امنیتی پیشرفته برای محافظت از داده‌ها و سیستم استفاده می‌کند.
          </p>
        </Callout>
        <FeatureGrid
          features={[
            { title: 'رمزنگاری', description: 'رمزنگاری در حالت سکون و انتقال' },
            { title: 'احراز هویت', description: 'OAuth 2.0 / JWT' },
            { title: 'مجوزدهی', description: 'RBAC' },
            { title: 'Audit Log', description: 'ثبت تمام عملیات' },
          ]}
        />
      </DocSection>

      <DocSection id="scalability" title="مقیاس‌پذیری">
        <p className="font-persian text-text-secondary leading-relaxed mb-6">
          سیستم قابلیت مقیاس‌پذیری افقی خودکار دارد و می‌تواند از صدها تا میلیون‌ها درخواست در ثانیه را پشتیبانی کند.
        </p>
        <SpecTable
          rows={[
            { label: 'نوع مقیاس‌پذیری', value: 'افقی' },
            { label: 'حداکثر درخواست', value: '10M+ در ثانیه' },
            { label: 'زمان پاسخ', value: '< 100ms' },
            { label: 'دسترس‌پذیری', value: '99.9%' },
          ]}
        />
      </DocSection>

      <DocSection id="performance" title="عملکرد">
        <SpecTable
          rows={[
            { label: 'زمان پاسخ متوسط', value: '< 50ms' },
            { label: 'زمان پاسخ P99', value: '< 200ms' },
            { label: 'Throughput', value: '10M+ RPS' },
            { label: 'Latency', value: '< 10ms' },
          ]}
        />
      </DocSection>

      <DocSection id="roadmap" title="نقشه راه توسعه">
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

      <DocSection id="faq" title="سوالات متداول">
        <FAQ
          items={[
            {
              question: 'Vantis Core برای چه سازمان‌هایی مناسب است؟',
              answer: 'Vantis Core برای سازمان‌هایی که نیاز به مدیریت زیرساخت در مقیاس بزرگ دارند مناسب است، از جمله استارتاپ‌های سریع‌الرشد و سازمان‌های بزرگ.',
            },
            {
              question: 'آیا سیستم قابلیت یکپارچگی با سیستم‌های موجود را دارد؟',
              answer: 'بله، Vantis Core از طریق API‌های استاندارد و ادغام‌های سفارشی، قابلیت اتصال به سیستم‌های مختلف را دارد.',
            },
            {
              question: 'چگونه می‌توانم شروع به استفاده کنم؟',
              answer: 'برای شروع، با تیم فروش ما تماس بگیرید تا یک دمو و مشاوره رایگان دریافت کنید.',
            },
          ]}
        />
      </DocSection>
    </DocumentationLayout>
  );
}
