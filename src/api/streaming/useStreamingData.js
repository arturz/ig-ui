import { useEffect, useRef, useState } from 'react';
import { SERVER } from '../../config';
import createEventSource from './createEventsSource';

export default function useStreamingData(botId) {
  const eventSource = useRef(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    function updateData({ data: newData }) {
      // newData is a base64 image, we want blob for performance
      try {
        fetch(`data:image/png;base64,${newData}`)
          .then((res) => res.blob())
          .then(setData);
      } catch (error) {
        console.error(error);
      }
    }

    eventSource.current = createEventSource(`${SERVER}streaming/${botId}`);
    eventSource.current.addEventListener('message', updateData);
    console.log("eventSource.current.addEventListener('message')");

    return function cleanup() {
      eventSource.current.removeEventListener('message', updateData);
      eventSource.current.close();
      eventSource.current = null;
      console.log("eventSource.current.removeEventListener('message')");
    };
  }, [botId]);

  return data;
}
