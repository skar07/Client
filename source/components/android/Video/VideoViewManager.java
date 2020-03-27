public class VideoViewManager extends SimpleViewManager<VideoView> {
	
	public static final String REACT_CLASS = 'VideoView';

	@Override
	public String getName() {
		return REACT_CLASS;
	}

	@Override
	protected VideoView createViewInstance(ThemedReactContext reactContext) {
		VideoView videoView = new VideoView(reactContext);
		return videoView
	}

	@ReactProp(name='source') {
		public void setVideoPath(VideoView videoView, String urlPath) {
			Uri uri = Uri.parse(urlPath);
			videoView.setVideoURI(uri);
			videoView.start();
		}
	}
}