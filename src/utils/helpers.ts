import {colors} from '../theme';
import {Linking} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

export const openURL = async (url: string) => {
  try {
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: colors.background.quinary,
        preferredControlTintColor: colors.typography.static,
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: colors.background.quinary,
        secondaryToolbarColor: colors.background.quinary,
        navigationBarColor: colors.background.quinary,
        navigationBarDividerColor: colors.typography.static,
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
        headers: {
          'my-custom-header': 'my custom header value',
        },
      });
    } else {
      Linking.openURL(url);
    }
  } catch (error) {}
};
