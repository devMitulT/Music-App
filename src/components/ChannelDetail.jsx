import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import Video from './Video';
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from '../utils/fetchFromAPI';

function ChannelDetail() {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet"&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  // console.log(videos);
  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
            height: '300px',
          }}
        ></div>
        <ChannelCard channelDetail={channelDetail} marginTop='-120px' />
      </Box>
      <Box display='flex' p='2'>
        <Box
          alignItems='center'
          justifyContent='center'
          sx={{ mr: { sm: '100px' } }}
        >
          <Video videos={videos} />
        </Box>
      </Box>
    </Box>
  );
}

export default ChannelDetail;
