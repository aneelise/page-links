import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import ProfileSection from '@/components/ProfileSection';
import LinkButton from '@/components/LinkButton';
import wheyProteinImage from '@/assets/whey.png';
import mixerImage from '@/assets/mixer.png'
import boloImage from '@/assets/bolo.png';
import picoleImage from '@/assets/picole.png';
import docedeleiteImage from '@/assets/docedeleite.png';
import marmitaImage from '@/assets/marmita.png';
import prensaImage from '@/assets/prensa.png';

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
            title="Whey Protein Adaptogen"
            subtitle="Meu suplemento favorito"
            image={wheyProteinImage}
            imageAlt="Whey Protein Adaptogen"
          />
          
          <LinkButton
            href="https://s.shopee.com.br/6fY9iuAKh0"
            title=" Mixer Elétrico "
            subtitle="Compacto, rápido e versátil"
            image={mixerImage}
            imageAlt="Mixer Elétrico"
          />

           <LinkButton
            href="https://s.shopee.com.br/1BDDCk8n9c"
            title="Doce de Leite - La Sereníssima 400g"
            subtitle="Doce de leite argentino cremoso"
            image={docedeleiteImage}
            imageAlt="Doce de leite argentino cremoso"
          />
          
          <LinkButton
            href="https://s.shopee.com.br/2qLRA2FjqN"
            title="Mini Máquina de bolo"
            subtitle="Mini bolos fresquinhos sempre que quiser."
            image={boloImage}
            imageAlt="Mini Máquina de bolo"
          />
           <LinkButton
            href="https://s.shopee.com.br/2qLRA2FjqN"
            title="Prensa Francesa"
            subtitle="Café/Chá fresco e prático."
            image={prensaImage}
            imageAlt="Prensa Francesa"
          />
           <LinkButton
            href="https://s.shopee.com.br/9zobkYjd6P"
            title="Kit Potes de Vidro 370ml "
            subtitle="Organize com praticidade."
            image={marmitaImage}
            imageAlt="Kit Potes de Vidro"
          />
          
          <LinkButton
            href="https://s.shopee.com.br/9pVBYrMSTw"
            title="Forma para picolé silicone "
            subtitle="Faça seus próprios picolés saudáveis."
            image={picoleImage}
            imageAlt="Forma para picolé silicone "
          />
          
          <LinkButton
            href="https://www.instagram.com/ane_soares1/"
            title="📸 Me siga no Instagram"
            subtitle="Conteúdos diários."
          />

          <LinkButton
            href="mailto:aneelise117@gmail.com"
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
