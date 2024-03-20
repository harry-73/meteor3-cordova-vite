
App.appendToConfig(`<edit-config file="app/src/main/AndroidManifest.xml"
                     mode="merge"
                     target="/manifest/application/activity"
                     xmlns:android="http://schemas.android.com/apk/res/android">
<activity android:exported="true"></activity>
 </edit-config>`);

App.appendToConfig(`<platform name="android">
<preference name="AndroidXEnabled" value="true" />

</platform>`);

App.info({
  id: 'org.test.devapp',
  name: 'Test',
  version: '0.19.0',
  description: 'Let Go',
  author: 'Test',
  email: 'contact@test.org',
  website: 'http://test'
});

App.setPreference('Orientation', 'portrait');
App.setPreference('Fullscreen', 'false');
App.setPreference('BackgroundColor', '0x15202bff');
App.setPreference('android-targetSdkVersion', '33');
App.setPreference('android-minSdkVersion', '28');
App.setPreference('loadUrlTimeoutValue', '700000');
App.setPreference('GradlePluginGoogleServicesEnabled', 'true');
App.setPreference('GradlePluginGoogleServicesVersion', '4.3.14');

App.accessRule('*');
App.accessRule('*', { type: 'navigation' });
