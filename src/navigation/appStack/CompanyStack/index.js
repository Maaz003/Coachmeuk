import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import R from '@components/utils/R';
import {navigationRef} from '@components/navigation/navigationService';
import {
  HomeTabIcon,
  UsersTabIcon,
  FilesTabIcon,
  ChatTabIcon,
  MoreTabIcon,
} from '@components/utils/Svg';
import Text from '@components/common/Text';
import {useSelector} from 'react-redux';

//COACH ON BOARDING
import ProfileScreen from '@containers/appContainers/CompanyFlow/profileModule/ProfileScreen';
import ProfileStepsScreen from '@containers/appContainers/CompanyFlow/homeModule/ProfileStepsScreen';
import ToDoScreen from '@containers/appContainers/CompanyFlow/homeModule/ToDoScreen';
import EvaluationScreen from '@containers/appContainers/CompanyFlow/homeModule/ToDoScreen/EvaluationScreen';
import UpdateEvaluationScreen from '@containers/appContainers/CompanyFlow/homeModule/ToDoScreen/UpdateEvaluationScreen';
import ScheduleScreen from '@containers/appContainers/CompanyFlow/ScheduleModule/ScheduleScreen';
import NotificationScreen from '@containers/appContainers/CompanyFlow/NotificationModule/NotificationScreen';
import ReviewsScreen from '@containers/appContainers/CompanyFlow/profileModule/ReviewsModule/ReviewsScreen';

//INBOX SCREENNS
import ChatScreen from '@containers/appContainers/CompanyFlow/InboxModule/ChatScreen';
import ChatsListScreen from '@containers/appContainers/CompanyFlow/InboxModule/ChatsListScreen';
import EditProfileScreen from '@containers/appContainers/CompanyFlow/profileModule/EditProfileSubModule';
import EditLessonScreen from '@containers/appContainers/CompanyFlow/profileModule/EditLessonSubModule';
import SettingsScreen from '@containers/appContainers/CompanyFlow/profileModule/SettingsSubModule';
import PricingInfo from '@containers/appContainers/CompanyFlow/profileModule/EditLessonSubModule/PricingInfo';
import SupportChat from '@components/view/screens/Notifications/SupportChat';
import StudentProfileScreen from '@containers/appContainers/CompanyFlow/homeModule/StudentProfileScreen';
import SeasonalStaticsScreen from '@containers/appContainers/CompanyFlow/profileModule/InsightsSubModule/SeasonalStaticsScreen';
import InsightsScreen from '@containers/appContainers/CompanyFlow/profileModule/InsightsSubModule';
import LessonDetailsScreen from '@containers/appContainers/CompanyFlow/homeModule/LessonDetailsScreen';
import ScheduleAvailabilityScreen from '@containers/appContainers/CompanyFlow/ScheduleModule/AvailabilityScreen';

//*********STUDENT FLOW***********//

const CompanyStack = () => {
  const Stack = createNativeStackNavigator();
  const CoachStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const auth = useSelector(state => state.auth);

  //COACH TAB
  const CompayTabNavigator = () => {
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

            style: {
              backgroundColor: R.color.white,
              height:
                Platform.OS === 'ios' ? R.unit.scale(70) : R.unit.scale(60),
              paddingVertical: R.unit.scale(0),
              alignItems: 'center',
              paddingBottom: 0,
              marginBottom: 0,
            },
          }}>
          <Tab.Screen
            name="Home"
            component={HomeStackNavigator}
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
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="UsersTab"
            component={ScheduleStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tab}>
                  <View style={{...styles.svgView, height: 30}}>
                    <UsersTabIcon
                      stroke={focused ? R.color.mainColor : R.color.gray}
                      width="100%"
                      height="100%"
                    />
                  </View>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="LeavesTab"
            component={NotificationsStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tab}>
                  <View
                    style={{
                      ...styles.svgView,
                      marginTop: 1,
                      // height: R.unit.scale(29),
                    }}>
                    <FilesTabIcon
                      stroke={focused ? R.color.mainColor : R.color.gray}
                      width="100%"
                      height="100%"
                    />
                  </View>
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="ChatTab"
            component={MessagesStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tab}>
                  <View style={{...styles.svgView}}>
                    <ChatTabIcon
                      stroke={focused ? R.color.mainColor : R.color.gray}
                      width="100%"
                      height="100%"
                    />
                  </View>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="MoreTab"
            component={ProfileStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.tab}>
                  <View style={styles.svgView}>
                    <MoreTabIcon
                      stroke={focused ? R.color.mainColor : R.color.gray}
                      width="100%"
                      height="100%"
                    />
                  </View>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

  //********COACH STACKS *********//
  const HomeStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'ToDo'}>
        <Stack.Screen name="ToDo" component={ToDoScreen} />
        <Stack.Screen name="ProfileSteps" component={ProfileStepsScreen} />
        <Stack.Screen name="EvaluationScreen" component={EvaluationScreen} />
        <Stack.Screen name="StudentProfile" component={StudentProfileScreen} />
        <Stack.Screen name="LessonDetails" component={LessonDetailsScreen} />
        <Stack.Screen
          name="UpdateEvaluation"
          component={UpdateEvaluationScreen}
        />
      </Stack.Navigator>
    );
  };

  const ScheduleStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Schedule'}>
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen
          name="ScheduleAvailability"
          component={ScheduleAvailabilityScreen}
        />
      </Stack.Navigator>
    );
  };

  const NotificationsStackNavigator = props => {
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

  const MessagesStackNavigator = props => {
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

  const ProfileStackNavigator = props => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Profile'}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: 'transparent'},
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: 'clamp',
                }),
              },
            }),
          }}
        />
        <Stack.Screen name="EditLesson" component={EditLessonScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Insights" component={InsightsScreen} />
        <Stack.Screen name="Seasonal" component={SeasonalStaticsScreen} />
        <CoachStack.Screen name="PricingInfo" component={PricingInfo} />
      </Stack.Navigator>
    );
  };

  return <CompayTabNavigator />;
};
export default CompanyStack;

const styles = StyleSheet.create({
  dot: {
    backgroundColor: R.color.white,
    marginTop: R.unit.scale(5),
    height: R.unit.scale(5),
    width: R.unit.scale(5),
    borderRadius: R.unit.scale(10),
  },
  svgView: {
    aspectRatio: 1,
    height: R.unit.scale(27),
  },
  tab: {
    padding: R.unit.scale(10),
    alignItems: 'center',
  },
});
