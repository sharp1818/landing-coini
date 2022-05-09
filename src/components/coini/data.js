// images

import busd from '../../assets/images/icons/coins/busd.svg';
import dai from '../../assets/images/icons/coins/dai.svg';
import usdc from '../../assets/images/icons/coins/usdc.svg';
import usdt from '../../assets/images/icons/coins/usdt.svg';


const coins = [
    {
        icon: usdc,
        name: 'USDC',
    },
    {
        icon: usdt,
        name: 'Tether',
    },
    {
        icon: dai,
        name: 'DAI',
    },
    {
        icon: busd,
        name: 'BUSD',
    },
];

const features = [
    {
        icon: 'shield',
        title: 'Global',
        description: 'Descarga nuestro Coini POS desde cualquier parte del mundo. Empieza a recibir pagos con nuestro Coini Pay.',
    },
    {
        icon: 'credit-card',
        title: 'Evita la volatilidad',
        description: 'Procesamos pagos en criptomonedas estables para mantener un valor equivalente al dólar.',
    },
    {
        icon: 'smile',
        title: 'Rentable',
        description: 'Comisiones mínimas y sin costos ocultos.',
    },
    {
        icon: 'phone-call',
        title: 'Sencillez',
        description: 'Soportamos las redes más populares y nos integramos fácilmente a cualquier plataforma de comercio electrónico.',
    },
];

export { coins, features };
