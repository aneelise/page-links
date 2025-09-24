import React from 'react';
import { ShoppingBag, Heart, Instagram, MessageCircle, Star, Gift } from 'lucide-react';
import ProfileSection from '@/components/ProfileSection';
import LinkButton from '@/components/LinkButton';

const Index = () => {
  console.log('Index component is rendering');
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-lg mx-auto">
        <ProfileSection
          name="Ane Elise 🌻"
          bio="Meus favoritos do dia a dia ✨ Produtos que eu uso, amo e recomendo de verdade."
        />
        
        <div className="space-y-4">
          <LinkButton
            href="https://s.shopee.com.br/3AyHU1XboV"
            title="🛍️ Whey Protein Adaptogen"
            subtitle="Meu suplemento favorito"
            icon={<ShoppingBag size={24} />}
          />
          
          <LinkButton
            href="https://exemplo.com/produtos-cuidados"
            title="💅 Produtos de Cuidados"
            subtitle="Skincare e autocuidado"
            icon={<Heart size={24} />}
          />
          
          <LinkButton
            href="https://exemplo.com/makeup"
            title="💄 Maquiagem Imperdível"
            subtitle="Looks incríveis para o dia a dia"
            icon={<Star size={24} />}
          />
          
          <LinkButton
            href="https://exemplo.com/promocoes"
            title="🎁 Promoções Exclusivas"
            subtitle="Descontos só para quem me segue!"
            icon={<Gift size={24} />}
          />
          
          <LinkButton
            href="https://instagram.com/seuperfil"
            title="📸 Me siga no Instagram"
            subtitle="Conteúdo diário e dicas de beleza"
            icon={<Instagram size={24} />}
          />
          
          <LinkButton
            href="https://exemplo.com/contato"
            title="💬 Fale Comigo"
            subtitle="Dúvidas? Manda uma mensagem!"
            icon={<MessageCircle size={24} />}
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            💕 Feito com carinho para vocês
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
