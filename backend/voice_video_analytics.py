import librosa
import numpy as np
import cv2

class VoiceVideoAnalytics:
    def analyze_voice(self, audio_path):
        y, sr = librosa.load(audio_path)
        mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13)
        avg_mfccs = np.mean(mfccs, axis=1)
        return avg_mfccs.tolist()

    def analyze_video(self, video_path):
        cap = cv2.VideoCapture(video_path)
        frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
        height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
        fps = cap.get(cv2.CAP_PROP_FPS)

        video_info = {
            "frame_count": frame_count,
            "width": width,
            "height": height,
            "fps": fps
        }
        cap.release()
        return video_info