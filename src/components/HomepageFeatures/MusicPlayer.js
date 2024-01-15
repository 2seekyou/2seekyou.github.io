import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayerButton.css'; // 导入你的按钮样式
import '../../css/hover.css'; // 导入你的按钮样式

// const MusicPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);

//   const togglePlay = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   // 监听音频播放完成事件，自动暂停并重置播放状态
//   useEffect(() => {
//     const handleEnded = () => {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     };
//   // 检查音频元素是否存在
//     if (audioRef.current) {
//       audioRef.current.addEventListener('ended', handleEnded);
//     }

//     return () => {
//       if (audioRef.current) {
//         audioRef.current.removeEventListener('ended', handleEnded);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <audio ref={audioRef} src="/2.mp3" />
//       <button className={isPlaying ? 'hvr-rectangle-out' : ' hvr-rectangle-out'} onClick={togglePlay}>
//         {isPlaying ? '1' : '1'}
//       </button>
//     </div>
//   );
  
// };

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(1); // 当前歌曲索引
  const audioRef = useRef(null);

  const playPrevious = () => {
    setIsPlaying(true);
    const newIndex = currentSong === 1 ? 5 : currentSong - 1;
    setCurrentSong(newIndex);
    playSong(newIndex);
  };

  const playPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    const newIndex = currentSong === 5 ? 1 : currentSong + 1;
    audioRef.current.pause(); // 暂停当前播放
    setCurrentSong(newIndex);
    playSong(newIndex);
  };
  
  const playSong = (songIndex) => {
    audioRef.current.pause(); // 暂停当前音频播放
    audioRef.current.src = `/${songIndex}.mp3`; // 设置新的音频源
  
    // 等待当前音频暂停后再播放新的音频
    audioRef.current.addEventListener('pause', () => {
      audioRef.current.load(); // 加载新的音频
      audioRef.current.play();
      setIsPlaying(true);
    }, { once: true }); // 仅触发一次
    
    audioRef.current.pause(); // 重新暂停当前音频，等待 'pause' 事件触发
  };
  

  useEffect(() => {
    // 监听音频播放完成事件，自动播放下一首
    const handleEnded = () => {
      playNext();
    };
    
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [currentSong]);

  return (
    <div>
      <audio ref={audioRef} src={`./${currentSong}.mp3`} />
      {/* 三个按钮 */}
      <button className="hvr-rectangle-out" onClick={playPrevious}>
        &lt;
      </button>
      <button className="hvr-rectangle-out" onClick={playPause}>
        {isPlaying ? '||' : '▶'}
      </button>
      <button className="hvr-rectangle-out" onClick={playNext}>
        &gt;
      </button>
    </div>
  );
};


export default MusicPlayer;
