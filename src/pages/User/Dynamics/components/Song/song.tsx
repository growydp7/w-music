import { FC, useMemo } from 'react'
import { Flex } from 'antd'
import styles from './song.module.scss'

interface IArtist {
  name: string;
}

interface ISong {
  info: {
    msg: string;
    song?: {
      album: {
        name: string;
        img80x80: string;
        artists: IArtist[]
      },
      name: string;
    },
    album?: {
      name: string;
      img80x80: string;
      artist: {
        name: string
      }
    },
    _blockType: number;
  };
}

const SongSheet:FC<ISong> = (props: ISong) => {
  const blockInfo = useMemo(() => {
    const { song, album } = props.info
    if (song) {
      return {
        picUrl: song.album.img80x80,
        name: song.name,
        artist: song.album.artists.map(item => item.name).join(',')
      }
    } else if (album) {
      return {
        picUrl: album.img80x80,
        name: album.name,
        artist: album.artist.name
      }
    }
  }, [props.info])

  return <div className={`mt-2 p-2 ${styles.container}`}>
    <Flex>
      <img src={blockInfo?.picUrl} className={styles.cover} />
      <div className='ml-2'>
        <p>{blockInfo?.name}</p>
        <p className={`text-xs ${styles.artist}`}>{blockInfo?.artist}</p>
      </div>
    </Flex>
  </div>;
}
 
export default SongSheet;