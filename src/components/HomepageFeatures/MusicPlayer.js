import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayerButton.css'; // 导入你的按钮样式

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // 监听音频播放完成事件，自动暂停并重置播放状态
  useEffect(() => {
    const handleEnded = () => {
      audioRef.current.pause();
      setIsPlaying(false);
    };
  // 检查音频元素是否存在
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="/eye-water.mp3" />
      <button className={isPlaying ? 'music-player-btn playing' : 'music-player-btn'} onClick={togglePlay}>
        {isPlaying ? '🔊:off' : '🔊:on'}
      </button>
    </div>
  );
};

export default MusicPlayer;
