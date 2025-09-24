import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LinkButtonProps {
  href: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, title, subtitle, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="text-primary group-hover:text-primary-foreground transition-colors">
              {icon}
            </div>
          )}
          <div className="text-left">
            <div className="font-semibold">{title}</div>
            {subtitle && (
              <div className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                {subtitle}
              </div>
            )}
          </div>
        </div>
        <ExternalLink 
          size={18} 
          className="text-muted-foreground group-hover:text-primary-foreground transition-colors"
        />
      </div>
    </a>
  );
};

export default LinkButton;