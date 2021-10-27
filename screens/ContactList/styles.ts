import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../constants';
import {iPhoneLarge} from '../../utils/screenSize';
const {width} = Metrics.window;
const tinyBorder = {
  borderColor: Colors.textGrey,
  borderWidth: 1,
};
const noBorder = {
  borderWidth: 0,
};
const styles = StyleSheet.create({
  bottomButtonBar: {
    alignItems: 'center',
    backgroundColor: Colors.focusColor,
    bottom: 0,
    flexDirection: 'row',
    flex: 1,
    height: iPhoneLarge ? 74 : 56,
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.base * 2,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  add: {
    borderColor: Colors.white,
    borderWidth: 2,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FF2D55',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.overlayDark40,
  },
  headerContainer: {
    width,
    height: 250,
    backgroundColor: '#0f0434',
    position: 'absolute',
  },
  scrollContainer: {flex: 1, paddingHorizontal: 16, paddingTop: 10},
  modalWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.focusColor,
    borderTopLeftRadius: Metrics.base * 3,
    borderTopRightRadius: Metrics.base * 3,
    flex: 1,
    marginTop: Metrics.base * 2,
    paddingTop: Metrics.base,
  },

  normalizeButton: {
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    borderRadius: Metrics.base * 2,
    height: Metrics.base * 4,
    justifyContent: 'center',
    width: Metrics.base * 26.625,
    ...tinyBorder,
  },
  normalizeButtonON: {
    backgroundColor: Colors.secondayGreen,
    ...noBorder,
  },
  range: {
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    borderRadius: Metrics.base * 2,
    height: Metrics.base * 4,
    justifyContent: 'center',
    width: Metrics.base * 7,
    ...tinyBorder,
  },
  rangeSelected: {
    backgroundColor: Colors.secondayGreen,
    ...noBorder,
  },
  tittleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Metrics.base * 4.5,
    paddingHorizontal: Metrics.base * 3,
    width: '100%',
  },
});

export default styles;
