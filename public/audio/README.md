# Audio Files

Place your MP3/WAV audio files here for the music player.

Currently the app is configured to look for:
- `sample.mp3` - Used for music previews and beat previews

Replace `sample.mp3` with your actual audio files or update the `audioUrl` and `previewUrl` paths in `src/lib/mockData.ts` to point to your audio files.

## File Structure
```
public/audio/
  └── sample.mp3 (add your audio file here)
```

## Supported Formats
- MP3
- WAV
- OGG

## Note
Audio files should be optimized for web (recommended: 128-320 kbps for MP3)
