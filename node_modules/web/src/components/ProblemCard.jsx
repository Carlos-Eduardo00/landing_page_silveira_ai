import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

function ProblemCard({ title, description }) {
  return (
    <Card className="bg-muted border-none">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

export default ProblemCard;