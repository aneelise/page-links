import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import ProfileSection from '@/components/ProfileSection';
import LinkButton from '@/components/LinkButton';
import wheyProteinImage from '@/assets/whey-protein.jpg';
import skincareImage from '@/assets/skincare-products.jpg';
import makeupImage from '@/assets/makeup-palette.jpg';
import giftBoxImage from '@/assets/gift-box.jpg';

const Index = () => {
  console.log('Index component is rendering');
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-lg mx-auto">
        <ProfileSection
          name="Ane Elise 🌻"
          bio="Meus favoritos do dia a dia ✨ Produtos que eu uso, amo e recomendo de verdade."
        />
        
        <div className="space-y-3">
          <LinkButton
            href="https://s.shopee.com.br/3AyHU1XboV"
            title="🛍️ Whey Protein Adaptogen"
            subtitle="Meu suplemento favorito"
            image={wheyProteinImage}
            imageAlt="Whey Protein Adaptogen"
          />
          
          <LinkButton
            href="https://exemplo.com/produtos-cuidados"
            title="💅 Produtos de Cuidados"
            subtitle="Skincare e autocuidado"
            image={skincareImage}
            imageAlt="Produtos de skincare"
          />
          
          <LinkButton
            href="https://exemplo.com/makeup"
            title="💄 Maquiagem Imperdível"
            subtitle="Looks incríveis para o dia a dia"
            image={makeupImage}
            imageAlt="Paleta de maquiagem"
          />
          
          <LinkButton
            href="https://exemplo.com/promocoes"
            title="🎁 Promoções Exclusivas"
            subtitle="Descontos só para quem me segue!"
            image={giftBoxImage}
            imageAlt="Caixa de presente"
          />
          
          <LinkButton
            href="https://instagram.com/seuperfil"
            title="📸 Me siga no Instagram"
            subtitle="Conteúdo diário e dicas de beleza"
          />
          
          <LinkButton
            href="https://exemplo.com/contato"
            title="💬 Fale Comigo"
            subtitle="Dúvidas? Manda uma mensagem!"
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
