import React from 'react';
import './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Constrains and horizontally centers content
 * based on viewport width
 */
function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={[className, 'container'].join(' ')}>
      { children }
    </div>
  )
}

export default Container;
