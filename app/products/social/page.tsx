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
  title: 'Vantis Social - مستندات محصول',
  description: 'پلتفرم شبکه‌سازی مدرن برای تیم‌های تکنولوژی. با تمرکز بر ارتباطات حرفه‌ای و همکاری بلادرنگ، Social فضایی امن و کارآمد برای تعامل تیم‌های مهندسی فراهم می‌کند.',
  keywords: ['وانتس', 'Vantis Social', 'شبکه‌سازی', 'تیم‌های تکنولوژی', 'همکاری بلادرنگ', 'ارتباطات حرفه‌ای'],
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
    canonical: '/products/social',
  },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://vantis.io/products/social',
    title: 'Vantis Social - مستندات محصول',
    description: 'پلتفرم شبکه‌سازی مدرن برای تیم‌های تکنولوژی با تمرکز بر ارتباطات حرفه‌ای',
    siteName: 'Vantis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vantis Social - مستندات محصول',
    description: 'پلتفرم شبکه‌سازی مدرن برای تیم‌های تکنولوژی با تمرکز بر ارتباطات حرفه‌ای',
    creator: '@vantis',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SocialProductPage() {
  return (
    <DocumentationLayout navigation={navigation}>
      <DocHero
        title="Vantis Social"
        description="پلتفرم شبکه‌سازی مدرن برای تیم‌های تکنولوژی. با تمرکز بر ارتباطات حرفه‌ای و همکاری بلادرنگ، Social فضایی امن و کارآمد برای تعامل تیم‌های مهندسی فراهم می‌کند."
        badge="تکنولوژی اجتماعی"
      />

      <DocSection id="overview" title="نمای کلی">
        <p className="font-persian text-text-secondary leading-relaxed">
          Vantis Social یک پلتفرم شبکه‌سازی حرفه‌ای است که برای تیم‌های تکنولوژی طراحی شده است. این سیستم با تمرکز بر ارتباطات امن، همکاری بلادرنگ و مدیریت دانش، فضایی بهینه برای تعامل تیم‌های مهندسی فراهم می‌کند.
        </p>
      </DocSection>

      <DocSection id="problem" title="مسئله">
        <Callout type="warning" title="چالش">
          <p>
            تیم‌های تکنولوژی با چالش‌های متعددی در ارتباطات و همکاری مواجه هستند. ابزارهای موجود یا بیش از حد پیچیده هستند یا ویژگی‌های لازم برای محیط‌های حرفه‌ای را ندارند.
          </p>
        </Callout>
      </DocSection>

      <DocSection id="solution" title="راه‌حل">
        <Callout type="success" title="راه‌حل Vantis Social">
          <p>
            Vantis Social با رابط کاربری ساده و ویژگی‌های پیشرفته، تعادل مناسبی بین سادگی و قدرت ایجاد می‌کند. سیستم قابلیت‌های همکاری بلادرنگ، مدیریت دانش و امنیت بالا را فراهم می‌کند.
          </p>
        </Callout>
      </DocSection>

      <DocSection id="key-features" title="ویژگی‌های کلیدی">
        <FeatureGrid
          features={[
            {
              title: 'همکاری بلادرنگ',
              description: 'تعامل همزمان با تأخیر کم',
            },
            {
              title: 'مدیریت دانش',
              description: 'ذخیره و اشتراک‌گذاری دانش',
            },
            {
              title: 'کانال‌های امن',
              description: 'ارتباطات رمزنگاری شده',
            },
            {
              title: 'جستجوی پیشرفته',
              description: 'یافتن سریع اطلاعات',
            },
            {
              title: 'یکپارچگی',
              description: 'اتصال با ابزارهای توسعه',
            },
            {
              title: 'موبایل',
              description: 'دسترسی از هر دستگاه',
            },
          ]}
        />
      </DocSection>

      <DocSection id="architecture" title="معماری">
        <p className="font-persian text-text-secondary leading-relaxed mb-6">
          Vantis Social از معماری بلادرنگ با استفاده از WebSocket و سرورهای توزیع‌شده استفاده می‌کند.
        </p>
        <SpecTable
          rows={[
            { label: 'نوع معماری', value: 'بلادرنگ' },
            { label: 'پروتکل', value: 'WebSocket / HTTP' },
            { label: 'مدل داده', value: 'توزیع‌شده' },
            { label: 'همگام‌سازی', value: 'بلادرنگ' },
            { label: 'Caching)', value: 'Redis' },
          ]}
        />
      </DocSection>

      <DocSection id="infrastructure" title="زیرساخت">
        <p className="font-persian text-text-secondary leading-relaxed mb-6">
          سیستم قابلیت استقرار در مناطق جغرافیایی مختلف برای کاهش تأخیر دارد.
        </p>
        <SpecTable
          rows={[
            { label: 'مناطق', value: 'چند منطقه‌ای' },
            { label: 'CDN', value: 'داخلی' },
            { label: 'Database', value: 'Multi-master' },
            { label: 'Backup', value: 'خودکار' },
            { label: 'Disaster Recovery', value: 'فعال' },
          ]}
        />
      </DocSection>

      <DocSection id="tech-stack" title="تکنولوژی‌ها">
        <TechStackGrid
          items={[
            { name: 'TypeScript', category: 'زبان برنامه‌نویسی' },
            { name: 'React', category: 'Frontend' },
            { name: 'Node.js', category: 'Backend' },
            { name: 'PostgreSQL', category: 'دیتابیس' },
            { name: 'Socket.io', category: 'بلادرنگ' },
            { name: 'Elasticsearch', category: 'جستجو' },
          ]}
        />
      </DocSection>

      <DocSection id="security" title="امنیت">
        <Callout type="info" title="امنیت اولویت اول">
          <p>
            Vantis Social با تمرکز بر امنیت، از استانداردهای پیشرفته برای محافظت از داده‌ها و ارتباطات استفاده می‌کند.
          </p>
        </Callout>
        <FeatureGrid
          features={[
            { title: 'رمزنگاری E2E', description: 'رمزنگاری انتها به انتها' },
            { title: 'احراز هویت', description: 'SSO / OAuth 2.0' },
            { title: 'مجوزدهی', description: 'دسترسی مبتنی بر نقش' },
            { title: 'Audit', description: 'ثبت تمام فعالیت‌ها' },
          ]}
        />
      </DocSection>

      <DocSection id="scalability" title="مقیاس‌پذیری">
        <p className="font-persian text-text-secondary leading-relaxed mb-6">
          سیستم قابلیت پشتیبانی از هزاران کاربر همزمان با عملکرد بهینه دارد.
        </p>
        <SpecTable
          rows={[
            { label: 'نوع مقیاس‌پذیری', value: 'افقی' },
            { label: 'کاربران همزمان', value: '100K+' },
            { label: 'زمان پاسخ', value: '< 50ms' },
            { label: 'دسترس‌پذیری', value: '99.9%' },
          ]}
        />
      </DocSection>

      <DocSection id="performance" title="عملکرد">
        <SpecTable
          rows={[
            { label: 'زمان پاسخ پیام', value: '< 100ms' },
            { label: 'زمان جستجو', value: '< 200ms' },
            { label: 'Throughput', value: '1M+ پیام/ثانیه' },
            { label: 'Latency', value: '< 20ms' },
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
              title: 'موبایل',
              description: 'اپلیکیشن موبایل بومی',
              status: 'in-progress',
            },
            {
              date: 'Q4 2026',
              title: 'AI Features',
              description: 'قابلیت‌های هوش مصنوعی',
              status: 'planned',
            },
            {
              date: 'Q1 2027',
              title: 'Enterprise',
              description: 'ویژگی‌های سازمانی',
              status: 'planned',
            },
          ]}
        />
      </DocSection>

      <DocSection id="faq" title="سوالات متداول">
        <FAQ
          items={[
            {
              question: 'Vantis Social برای چه تیم‌هایی مناسب است؟',
              answer: 'Vantis Social برای تیم‌های تکنولوژی، گروه‌های توسعه، و سازمان‌هایی که نیاز به ارتباطات حرفه‌ای دارند مناسب است.',
            },
            {
              question: 'آیا داده‌ها امن هستند؟',
              answer: 'بله، تمام ارتباطات با رمزنگاری انتها به انتها محافظت می‌شوند و داده‌ها در سرورهای امن ذخیره می‌شوند.',
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
