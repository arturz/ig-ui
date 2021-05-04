import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import BotStream from '../atoms/BotStream';
import PhoneFrame from '../atoms/PhoneFrame';
import Loading from '../molecules/Loading';

export default function Phone({ botId, commands, onLoad }) {
  const [streamLoaded, setStreamLoaded] = useState(false);
  const fullyLoaded = commands !== null && streamLoaded;

  return (
    <PhoneFrame loaded={fullyLoaded} layout transition={{ duration: 1, ease: 'easeOut' }}>
      <AnimatePresence>{fullyLoaded || <Loading />}</AnimatePresence>
      {botId !== null && (
        <BotStream
          botId={botId}
          onLoad={() => {
            setStreamLoaded(true);
            onLoad();
          }}
        />
      )}
    </PhoneFrame>
  );
}
