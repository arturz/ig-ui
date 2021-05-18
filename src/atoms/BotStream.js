import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import useStreamingData from '../api/streaming/useStreamingData';
import simpleHiddenVariants from '../variants/simpleHiddenVariant';

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  user-select: none;
`;

export default function BotStream({ botId, onLoad }) {
  const data = useStreamingData(botId);
  const [url, setUrl] = useState(null);

  const firstLoad = useRef(false);
  useEffect(() => {
    if (url && !firstLoad.current) {
      onLoad();
      firstLoad.current = true;
    }
  }, [url]);

  useEffect(() => {
    function cleanup() {
      if (url !== null) {
        URL.revokeObjectURL(url);
      }
    }
    cleanup();

    if (data !== null) {
      setUrl(URL.createObjectURL(data));
    }

    return cleanup;
  }, [data]);

  return url ? (
    <Image
      src={url}
      alt="Live bot preview"
      variants={simpleHiddenVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.5 }}
    />
  ) : null;
}
