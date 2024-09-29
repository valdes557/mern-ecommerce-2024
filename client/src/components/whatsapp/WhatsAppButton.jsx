import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '237680404921'; // Remplacez par votre numéro de téléphone WhatsApp
  const message = 'Bonjour, je voudrais en savoir plus sur vos produits !'; // Message prédéfini

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full shadow-lg transition duration-300 ease-in-out"
      aria-label="WhatsApp Chat"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.37 0 0 5.373 0 12c0 2.117.553 4.186 1.601 6.012L0 24l6.145-1.589A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.149c-1.878 0-3.715-.521-5.296-1.5L5.22 20.78l.566-2.166C4.271 17.127 3.36 14.623 3.36 12 3.36 6.474 7.475 2.36 12 2.36c4.525 0 8.64 4.115 8.64 8.64s-4.115 8.64-8.64 8.64zM17.241 14.91l-.413-.204c-.34-.166-.782-.307-1.17-.482-.496-.219-1.034-.408-1.559-.289-.607.14-.923.672-1.307 1.05-.374.37-.63.33-1.029.17-1.118-.443-2.087-1.265-2.74-2.21-.385-.532-.734-1.094-1.034-1.665-.191-.362.016-.564.229-.789.217-.229.469-.5.67-.75.212-.261.46-.53.47-.878.014-.438-.164-.824-.326-1.199-.199-.456-.41-.923-.631-1.372-.14-.284-.361-.403-.685-.324-.277.066-.568.189-.835.324-.489.246-.931.624-1.273 1.065-.766 1.02-.844 2.091-.62 3.239.2.979.656 1.845 1.294 2.623.729.875 1.654 1.575 2.67 2.118.855.451 1.781.777 2.755.84 1.055.068 2.074-.107 3.017-.503.426-.176.794-.496.975-.918.134-.315.205-.653.263-.984.067-.365.104-.748.032-1.112z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;