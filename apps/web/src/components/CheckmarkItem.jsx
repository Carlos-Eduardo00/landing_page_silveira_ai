import React from 'react';
import { Check } from 'lucide-react';

function CheckmarkItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
        <Check className="w-4 h-4 text-secondary" />
      </div>
      <p className="text-foreground leading-relaxed">{text}</p>
    </div>
  );
}

export default CheckmarkItem;