import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import LoadingCircle from '../atoms/LoadingCircle';
import loadingCircle from '../variants/loadingCircle';

const LoadingContainer = styled(motion.div)`
  display: flex;
`;

// wrap it with <AnimatePresence> if you wish to animate unmounting
export default function Loading() {
  return (
    <motion.div
      // for AnimatePresence, it can't have a variant (possibly framer motion bug)
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      duration={0.5}
    >
      <LoadingContainer
        transition={{
          staggerChildren: 0.2,
        }}
        initial="start"
        animate="end"
      >
        <LoadingCircle variants={loadingCircle} />
        <LoadingCircle variants={loadingCircle} />
        <LoadingCircle variants={loadingCircle} />
      </LoadingContainer>
    </motion.div>
  );
}
