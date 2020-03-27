public class VideoViewPackage implements ReactPackage {
	
	@Override 
	public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
		return Collections.emptyList();
	}

	@Override
	createViewManagers(ReactApplicationContext reactContext) {
		return Collections.<ViewManager>singletonList(new VideoViewManager());
	}
}