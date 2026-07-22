import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

function BenefitCard({ icon: Icon, title, description }) {
  return (
    <Card className="border-none shadow-sm bg-white hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default BenefitCard;