import React, {useState, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import R from '@components/utils/R';
import PersonalInfoTab from '../PersonalInfoTab';
import PaymentMethodsTab from '../PaymentMethodsTab';
import NotificationsTab from '../NotificationsTab';
import Text from '@components/common/Text';
import HorizontalTab from '@components/common/HorizontalTab';

export default function AccountSettingscreen(props) {
  const [page, setPage] = useState(0);
  const scrollRef = useRef();

  let tabs = [
    {index: 0, title: 'Personal Info'},
    {index: 1, title: 'Payment methods'},
    {index: 2, title: 'Notifications'},
  ];

  const onTabChange = index => {
    setPage(index);
    if (index === 0) {
      scrollRef.current.scrollTo({x: 0});
    }
    if (index === 1) {
      scrollRef.current.scrollTo({x: R.unit.width(0.53)});
    }
    if (index === 2) {
      scrollRef.current.scrollTo({x: R.unit.width(0.53)});
    }
  };

  return (
    <View style={styles.mainLayout}>
      <View style={styles.contentView}>
        <Text
          variant={'h3'}
          font={'Sequel551'}
          color={R.color.blackShade4}
          align={'left'}
          transform={'none'}>
          Account settings
        </Text>
        <HorizontalTab
          tabs={tabs}
          onTabChange={onTabChange}
          scrollRef={scrollRef}
          tabStyles={{marginRight: R.unit.scale(56)}}
        />
      </View>
      <View style={{flex: 1}}>
        {page === 0 ? (
          <PersonalInfoTab />
        ) : page === 1 ? (
          <PaymentMethodsTab />
        ) : (
          <NotificationsTab />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
    paddingHorizontal: 0,
    flex: 1,
  },
  contentView: {
    paddingHorizontal: R.unit.scale(16),
    width: '100%',
    justifyContent: 'center',
    marginTop: R.unit.scale(32),
  },
});
