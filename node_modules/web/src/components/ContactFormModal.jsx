import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

function ContactFormModal({ open, onOpenChange }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const submissions = JSON.parse(localStorage.getItem('demo_submissions') || '[]');
      submissions.push({
        ...data,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('demo_submissions', JSON.stringify(submissions));
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({
        title: "Demonstração agendada",
        description: "Entraremos em contato em breve para agendar sua demonstração.",
      });
      
      reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Agendar demonstração gratuita</DialogTitle>
          <DialogDescription>
            Preencha seus dados e entraremos em contato para mostrar o agente funcionando.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="nome" className="text-sm font-medium">Nome completo</Label>
            <Input
              id="nome"
              type="text"
              className="mt-1.5 text-foreground"
              placeholder="Seu nome"
              {...register('nome', { required: 'Nome é obrigatório' })}
            />
            {errors.nome && (
              <p className="text-sm text-destructive mt-1">{errors.nome.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              className="mt-1.5 text-foreground"
              placeholder="seu@email.com"
              {...register('email', { 
                required: 'Email é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido'
                }
              })}
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="telefone" className="text-sm font-medium">Telefone</Label>
            <Input
              id="telefone"
              type="tel"
              className="mt-1.5 text-foreground"
              placeholder="(00) 00000-0000"
              {...register('telefone', { required: 'Telefone é obrigatório' })}
            />
            {errors.telefone && (
              <p className="text-sm text-destructive mt-1">{errors.telefone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="empresa" className="text-sm font-medium">Empresa</Label>
            <Input
              id="empresa"
              type="text"
              className="mt-1.5 text-foreground"
              placeholder="Nome da sua empresa"
              {...register('empresa', { required: 'Empresa é obrigatória' })}
            />
            {errors.empresa && (
              <p className="text-sm text-destructive mt-1">{errors.empresa.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Agendar demonstração'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ContactFormModal;