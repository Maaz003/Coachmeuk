import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import R from '@components/utils/R';
import {navigationRef} from '@components/navigation/navigationService';
import {
  UsersTabIcon,
  ChatTabIcon,
  FilesTabIcon,
  MoreTabIcon,
  HomeTabIcon,
} from '@components/utils/Svg';
import Text from '@components/common/Text';

//EXPLORE MODULE
import ExploreScreen from '@containers/appContainers/EmployeeFlow/ExploreModule';
import SearchResultsScreen from '@containers/appContainers/EmployeeFlow/ExploreModule/searchResultsScreen';
import SearchOnMapScreen from '@containers/appContainers/EmployeeFlow/ExploreModule/searchOnMapScreen';
import CoachDetailsScreen from '@containers/appContainers/EmployeeFlow/ExploreModule/coachDetailsScreen';
import SelectSportScreen from '@containers/appContainers/EmployeeFlow/ExploreModule/getAMatchSubModule/SelectSportScreen';
import ConveneintTimeScreen from '@containers/appContainers/EmployeeFlow/ExploreModule/getAMatchSubModule/ConveneintTimeScreen';
import DateAvailability from '@containers/appContainers/EmployeeFlow/ExploreModule/getAMatchSubModule/DateAvailabilityScreen';
import LocationScreen from '@containers/appContainers/EmployeeFlow/ExploreModule/getAMatchSubModule/LocationScreen';
import CoachQualitiesScreen from '@containers/appContainers/EmployeeFlow/ExploreModule/getAMatchSubModule/CoachQualitiesScreen';
import SkillTaughtScreen from '@containers/appContainers/EmployeeFlow/ExploreModule/getAMatchSubModule/SkillTaughtScreen/SkillTaughtScreen';

//SCHEDULE MODULE
import ScheduledLessonsScreen from '@containers/appContainers/EmployeeFlow/ScheduleModule/scheduledLessonsScreen';
import StudentLessonDetailsScreen from '@containers/appContainers/EmployeeFlow/ScheduleModule/StudentLessonDetailsScreen';
import StudentEvaluationDetailsScreen from '@containers/appContainers/EmployeeFlow/ScheduleModule/StudentEvaluationDetailsScreen';

//NOTIFICATIONS MODULE
import NotificationScreen from '@containers/appContainers/EmployeeFlow/NotificationsModule/NotificationScreen';
import SupportChat from '@components/view/screens/Notifications/SupportChat';

//CHAT MODULE
import ChatsListScreen from '@containers/appContainers/EmployeeFlow/InboxModule/ChatsListScreen';
import ChatScreen from '@containers/appContainers/EmployeeFlow/InboxModule/ChatScreen';

//PROFILE MODULE
import ProfileScreen from '@containers/appContainers/EmployeeFlow/ProfileModule/ProfileScreen';
import AccountSettingscreen from '@containers/appContainers/EmployeeFlow/ProfileModule/settingsSubModule/AccountSetting';
import FavouritesCoachScreen from '@containers/appContainers/EmployeeFlow/ProfileModule/favouritesCoachScreen';

const EmployeeStack = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  //STUDENT TAB
  const EmployeeTabNavigator = () => {
    return (
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            headerShown: false,
            tabBarVisible: true,
          }}
          tabBarOptions={{
            showLabel: false,
            activeTintColor: 'white',
            inactiveTintColor: '#d9d9d9',
            paddingBottom: 0,
            style: styles.tabStyles,
          }}>
          <Tab.Screen
            name="StudentExploreTab"
            component={StudentHomeStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tab}>
                  <View style={styles.svgView}>
                    <HomeTabIcon
                      stroke={focused ? R.color.mainColor : R.color.gray}
                      width="100%"
                      height="100%"
                    />
                  </View>

                  <Text
                    variant={'body5'}
                    font={focused ? 'InterSemiBold' : 'interRegular'}
                    gutterTop={4}
                    color={focused ? R.color.black : R.color.gray}
                    align={'center'}
                    transform={'none'}>
                    Explore
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="StudentScheduleTab"
            component={StudentScheduleStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tab}>
                  <View style={styles.svgView}>
                    <UsersTabIcon
                      stroke={focused ? R.color.mainColor : R.color.gray}
                      width="100%"
                      height="100%"
                    />
                  </View>
                  <Text
                    variant={'body5'}
                    font={focused ? 'InterSemiBold' : 'interRegular'}
                    gutterTop={4}
                    color={focused ? R.color.black : R.color.gray}
                    align={'center'}
                    style={{width: '100%'}}
                    transform={'none'}>
                    Schedule
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="StudentNotificationsTab"
            component={StudentNotificationsStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tab}>
                  <View
                    style={{
                      ...styles.svgView,
                      marginTop: 1,
                      height: R.unit.scale(29),
                    }}>
                    <FilesTabIcon
                      stroke={focused ? R.color.mainColor : R.color.gray}
                      width="100%"
                      height="100%"
                    />
                  </View>
                  <Text
                    variant={'body5'}
                    font={focused ? 'InterSemiBold' : 'interRegular'}
                    gutterTop={3}
                    color={focused ? R.color.black : R.color.gray}
                    align={'center'}
                    transform={'none'}>
                    Notifications
                  </Text>
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="StudentInboxTab"
            component={StudentMessagesStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tab}>
                  <View style={{...styles.svgView, height: R.unit.scale(29)}}>
                    <ChatTabIcon
                      stroke={focused ? R.color.mainColor : R.color.gray}
                      width="100%"
                      height="100%"
                    />
                  </View>
                  <Text
                    variant={'body5'}
                    font={focused ? 'InterSemiBold' : 'interRegular'}
                    gutterTop={4}
                    color={focused ? R.color.black : R.color.gray}
                    align={'center'}
                    transform={'none'}>
                    Inbox
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="StudentProfileTab"
            component={StudentProfileStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tab}>
                  <View style={styles.svgView}>
                    <MoreTabIcon
                      stroke={focused ? R.color.mainColor : R.color.gray}
                      fill={focused ? R.color.mainColor : R.color.gray}
                      width="100%"
                      height="100%"
                    />
                  </View>
                  <Text
                    variant={'body5'}
                    font={focused ? 'InterSemiBold' : 'interRegular'}
                    gutterTop={4}
                    color={focused ? R.color.black : R.color.gray}
                    align={'center'}
                    transform={'none'}>
                    Profile
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="NoTabsStack"
            component={NoTabsStackNavigator}
            options={{
              tabBarButton: () => null,
              tabBarVisible: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

  const StudentHomeStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Explore'}>
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
        <Stack.Screen name="SearchOnMap" component={SearchOnMapScreen} />
        <Stack.Screen name="CoachDetails" component={CoachDetailsScreen} />
      </Stack.Navigator>
    );
  };

  const StudentScheduleStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'ScheduledLessons'}>
        <Stack.Screen
          name="ScheduledLessons"
          component={ScheduledLessonsScreen}
        />
        <Stack.Screen name="NotificationChat" component={SupportChat} />
        <Stack.Screen
          name="StudentLessonDetails"
          component={StudentLessonDetailsScreen}
        />
        <Stack.Screen
          name="StudentEvaluationDetails"
          component={StudentEvaluationDetailsScreen}
        />
      </Stack.Navigator>
    );
  };

  const StudentNotificationsStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Notification'}>
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="NotificationChat" component={SupportChat} />
      </Stack.Navigator>
    );
  };

  const StudentMessagesStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ChatsList" component={ChatsListScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    );
  };

  const StudentProfileStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Profile'}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="AccountSettingscreen"
          component={AccountSettingscreen}
        />
      </Stack.Navigator>
    );
  };

  const NoTabsStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'SelectSports'}>
        <Stack.Screen name="SelectSports" component={SelectSportScreen} />
        <Stack.Screen name="ConveneintTime" component={ConveneintTimeScreen} />
        <Stack.Screen name="DateAvailability" component={DateAvailability} />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen
          name="CoachQualitiesScreen"
          component={CoachQualitiesScreen}
        />
        <Stack.Screen name="SkillTaughtScreen" component={SkillTaughtScreen} />
        <Stack.Screen
          name="FavouritesCoach"
          component={FavouritesCoachScreen}
        />
      </Stack.Navigator>
    );
  };

  return <EmployeeTabNavigator />;
};
export default EmployeeStack;

const styles = StyleSheet.create({
  svgView: {
    aspectRatio: 1,
    height: R.unit.scale(29),
  },
  tab: {
    width: R.unit.width(0.19),
    alignItems: 'center',
  },
  tabStyles: {
    backgroundColor: R.color.white,
    // height: Platform.OS === 'ios' ? R.unit.scale(70) : R.unit.scale(60),
    height: Platform.OS === 'ios' ? R.unit.height(0.085) : R.unit.height(0.082),
    paddingVertical: R.unit.scale(0),
    alignItems: 'center',
    paddingBottom: 0,
    marginBottom: 0,
  },
});
