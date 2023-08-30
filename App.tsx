import React from 'react';
import {WebView} from 'react-native-webview';

function App(): JSX.Element {
  return (
    <WebView
      originWhitelist={['*']}
      source={{uri: 'https://sinch-chat.singu.io/'}}
      style={{
        flex: 1,
      }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      thirdPartyCookiesEnabled={true}
      sharedCookiesEnabled={true}
      webviewDebuggingEnabled={true}
    />
  );
}

export default App;
