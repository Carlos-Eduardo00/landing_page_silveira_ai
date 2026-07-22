import React from 'react';

function StepCard({ number, title, description }) {
  return (
    <div className="relative">
      <div className="flex gap-6 items-start">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
            {number}
          </div>
        </div>
        <div className="flex-1 pt-2">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default StepCard;