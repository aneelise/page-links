import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LinkButtonProps {
  href: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, title, subtitle, image, imageAlt }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button group"
    >
      <div className="flex items-center justify-between min-h-[60px]">
        <div className="flex items-center space-x-4 flex-1">
          {image ? (
            <div className="flex-shrink-0">
              <img 
                src={image} 
                alt={imageAlt || title}
                className="w-14 h-14 rounded-xl object-cover"
              />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-2xl flex-shrink-0">
              {title.split(' ')[0]}
            </div>
          )}
          <div className="text-left flex-1 min-w-0">
            <div className="font-semibold text-card-foreground">
              {title}
            </div>
            {subtitle && (
              <div className="text-sm text-muted-foreground mt-1">
                {subtitle}
              </div>
            )}
          </div>
        </div>
        <ExternalLink 
          size={18} 
          className="text-muted-foreground flex-shrink-0 ml-2"
        />
      </div>
    </a>
  );
};

export default LinkButton;