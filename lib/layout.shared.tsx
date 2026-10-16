import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpen } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <><span className="brand-mark">P</span><span>PROVOUS</span><span className="nav-docs-tag">DOCS</span></>,
    },
    links: [{ text: 'Home', url: '/', icon: <BookOpen size={15} /> }],
  };
}
