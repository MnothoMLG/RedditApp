import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert, View} from 'react-native';
import {AppButton, Margin, Padding} from '../../components';
import SwipeButton from 'rn-swipe-button';
import styles from './styles';
import {colors} from '../../theme';
import Greeting from '../../components/greetingHeader';

const Home: React.FC = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Greeting />
      <Margin mb={56} />
      <Padding pl={24} pr={24} style={{width: '100%'}}>
        <AppButton
          fullWidth
          variant="clear"
          disabled={false}
          onPress={() => {}}
          rounded
          textSize={14}
          label={'Clear Button'}
        />
        <Margin mb={12} />
        <AppButton
          fullWidth
          variant="dark"
          disabled={false}
          onPress={() => {}}
          textSize={14}
          rounded
          label={'Secondary'}
        />
        <Margin mb={12} />
        <AppButton
          fullWidth
          variant="light"
          disabled={false}
          onPress={() => {
            Alert.alert('Are you sure', 'Do you want to log off?', [
              {
                text: 'Yes',
                onPress: () => {},
              },
              {
                text: 'No',
                onPress: () => {},
              },
            ]);
          }}
          textSize={14}
          rounded
          label={'Log Off'}
        />
        <Margin mb={12} />
        <SwipeButton
          height={52}
          shouldResetAfterSuccess
          onSwipeSuccess={() => {
            navigate('DeviceCheck');
          }}
          containerStyles={styles.swipeContainer}
          railBackgroundColor={colors.background.bgDark}
          thumbIconStyles={styles.thumbIconStyles}
          titleColor={colors.background.primary}
          titleFontSize={14}
          railBorderColor={colors.background.secondary}
          thumbIconBackgroundColor={colors.background.transparent}
          thumbIconBorderColor="rgba(0, 0, 0, 0)"
          railStyles={styles.railStyles}
          thumbIconComponent={() => (
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: colors.background.primary,
                borderRadius: 8,
              }}
            />
          )}
          thumbIconWidth={56}
          title={'Slide me to continue'}
        />
      </Padding>
    </View>
  );
};

export default Home;
