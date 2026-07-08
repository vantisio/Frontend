/**
 * Icon Mapping
 * 
 * Maps string identifiers to Lucide React icons.
 * This allows Server Components to reference icons by string without importing React components.
 */

import { 
  Cpu, 
  Target, 
  TrendingUp, 
  Shield, 
  Zap, 
  Layers,
  Database,
  Users,
  FileText,
  BarChart,
  Building2,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  RefreshCw,
  Layout,
  Eye,
  Keyboard
} from 'lucide-react';

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Layers,
  Database,
  Users,
  FileText,
  BarChart,
  Building2,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  RefreshCw,
  Layout,
  Eye,
  Keyboard,
};

export function getIcon(iconName: string): React.ComponentType<{ className?: string }> {
  return iconMap[iconName] || Cpu; // Default fallback
}
