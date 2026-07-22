import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User } from 'lucide-react';

const demoMessages = [
  { id: 1, type: 'customer', text: 'Olá! Vocês estão abertos agora?', delay: 0 },
  { id: 2, type: 'agent', text: 'Olá! Sim, estamos abertos de segunda a sábado, das 9h às 22h. Como posso ajudar você hoje?', delay: 1200 },
  { id: 3, type: 'customer', text: 'Gostaria de fazer um pedido. Qual o cardápio?', delay: 3000 },
  { id: 4, type: 'agent', text: 'Claro! Temos pizzas, massas, saladas e sobremesas. Qual categoria te interessa?', delay: 4500 },
  { id: 5, type: 'customer', text: 'Pizza! Quais sabores vocês têm?', delay: 6200 },
  { id: 6, type: 'agent', text: 'Temos Margherita, Calabresa, Portuguesa, Quatro Queijos, Frango com Catupiry e mais 8 sabores. Posso enviar o cardápio completo?', delay: 7800 },
  { id: 7, type: 'customer', text: 'Sim, por favor! E vocês aceitam cartão?', delay: 9500 },
  { id: 8, type: 'agent', text: 'Sim! Aceitamos cartão de crédito, débito, PIX e dinheiro. Vou transferir você para nossa equipe finalizar seu pedido. Um momento!', delay: 11000 },
];

function ChatDemoWidget() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < demoMessages.length) {
      const currentMessage = demoMessages[currentIndex];
      const timer = setTimeout(() => {
        if (currentMessage.type === 'agent') {
          setIsTyping(true);
          setTimeout(() => {
            setMessages(prev => [...prev, currentMessage]);
            setIsTyping(false);
            setCurrentIndex(prev => prev + 1);
          }, 800);
        } else {
          setMessages(prev => [...prev, currentMessage]);
          setCurrentIndex(prev => prev + 1);
        }
      }, currentMessage.delay);

      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
      <div className="bg-secondary text-secondary-foreground p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold">Agente Silveira IA</h3>
          <p className="text-xs opacity-90">Online agora</p>
        </div>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-3 bg-gray-50">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.type === 'customer' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-2 max-w-[80%] ${message.type === 'customer' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'customer' ? 'bg-primary/10' : 'bg-secondary/10'
                }`}>
                  {message.type === 'customer' ? (
                    <User className="w-4 h-4 text-primary" />
                  ) : (
                    <Bot className="w-4 h-4 text-secondary" />
                  )}
                </div>
                <div className={`rounded-2xl px-4 py-2.5 ${
                  message.type === 'customer' 
                    ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                    : 'bg-white text-foreground border border-border rounded-tl-sm'
                }`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="flex gap-2 max-w-[80%]">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-secondary" />
              </div>
              <div className="bg-white border border-border rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-border">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="flex-1 px-4 py-2 border border-border rounded-xl text-sm text-foreground bg-background"
            disabled
          />
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-xl text-sm font-medium opacity-50 cursor-not-allowed">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatDemoWidget;