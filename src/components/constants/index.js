import R from '@components/utils/R';
import React from 'react';
import {
  ClockAnalyticIcon,
  EncouragingIcon,
  FriendlyIcon,
  HelpIconAcc,
  InsightsIconAcc,
  InstantMessageIcon,
  LessonIconAcc,
  MoneyIcon,
  ProfileAnalyticIcon,
  ProfileIcon,
  ProfileIconAcc,
  SettingIconAcc,
  SpecializeIcon,
  StarIcon,
  StarIconAcc,
  UserTabIcon,
} from '@components/utils/Svg';
import uuid from 'react-native-uuid';

export const genderData = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  {label: 'Other', value: 'Other'},
];

export const focusTags = [
  {label: 'ForeHand', value: 'Forehand'},
  {label: 'BackHand', value: 'Backhand'},
];

export const levels = [
  {label: 'Begginer', value: 'Begginer'},
  {label: 'MidLevel', value: 'MidLevel'},
  {label: 'Senior', value: 'Senior'},
  {label: 'Expert', value: 'Expert'},
];

export const teachingLevel = [
  {label: 'Kids', value: 'Kids'},
  {label: 'Teen', value: 'Teen'},
  {label: 'Adults', value: 'Adults'},
  {label: 'Old', value: 'Old'},
];

export const certificates = [
  {label: 'Certificate 1', value: 'Certificate 1'},
  {label: 'Certificate 2', value: 'Certificate 2'},
  {label: 'Certificate 3', value: 'Certificate 3'},
  {label: 'Certificate 4', value: 'Certificate 4'},
];

export const faqsQuestion = [
  {
    label: 'Can I bring more than one person?',
    value: 'Can I bring more than one person?',
  },
  {label: 'Are there any other fees?', value: 'Are there any other fees?'},
];

export const pricingAspects = [
  {id: 0, image: R.image.ProfileHostingPricing(), title: 'Profile hosting'},
  {id: 1, image: R.image.CustomerSupportPricing(), title: 'Customer support'},
  {
    id: 2,
    image: R.image.OnlineBookingPricing(),
    title: 'Online booking system',
  },
  {
    id: 3,
    image: R.image.SecuredPaymentPricing(),
    title: 'Secured payment processing',
  },
  {
    id: 4,
    image: R.image.InstantMessagingPricing(),
    title: 'Instant messaging with students',
  },
  {id: 5, image: R.image.AnalyticsPricing(), title: 'Analytics and insights'},
];

export const variations = [
  {
    id: 0,
    title: 'Teaches',
    text: 'Kids, Juniors, Adults, Seniors',
    svg: <ProfileIcon height="90%" width="90%" />,
  },
  {
    id: 1,
    text: 'Beginners, Intermediate, Advanced',
    title: 'Levels Taught:',
    svg: <StarIcon height="90%" width="90%" />,
  },
  {
    id: 2,
    title: 'Specialization:',
    text: 'Forehand, backhand, Top spin',
    svg: <SpecializeIcon height="90%" width="90%" />,
  },
  {
    id: 3,
    title: 'Fast Response Rate:',
    text: '100%',
    svg: <InstantMessageIcon height="80%" width="80%" />,
  },
];

export const bioUser =
  'Hi! I’m John, one of the West Coast`s most respected tennis teachers. Since 1970 over 25,000 students have attended my camps and clinics. With a limited enrollment policy, the student-staff ratio is 4-1. Since 1970 over 25,000 students have attended my camps and clinics';

export const trainingLocations = [
  {
    venue: 'Royal Tennis Court',
    address: 'DeWitt Clinton Park, W 54th St, New York, NY',
  },
  {
    venue: 'Riverbank State Park Tennis Courts',
    address: 'DeWitt Clinton Park, W 54th St New York, NY',
  },
  {
    venue: '',
    address: 'DeWitt Clinton Park, W 54th St New York, NY',
  },
];

export const commonQuestions = [
  {
    question: 'Can I bring more than one person?',
    answer:
      'For most people, a weekly tennis lesson is about the right number to maintain their development, as long as they are playing at least once per week on top of this.',
  },
  {
    question: 'Are there any other fees?',
    answer:
      'For most people, a weekly tennis lesson is about the right number to maintain their development, as long as they are playing at least once per week on top of this.',
  },
  {
    question: 'Can we speak before the lesson?',
    answer:
      'For most people, a weekly tennis lesson is about the right number to maintain their development, as long as they are playing at least once per week on top of this.',
  },
  {
    question: 'Do you offer a free trial lesson?',
    answer:
      'For most people, a weekly tennis lesson is about the right number to maintain their development, as long as they are playing at least once per week on top of this.',
  },
];

export const certificatesList = [
  {
    expiry: 'Jan 16,2021',
    image: R.image.Certificate(),
    title: 'The British Tennis Coaches association.',
  },
  {
    expiry: 'Jan 24,2021',
    image: R.image.Certificate(),
    title: 'LTA Tennis Coaching.',
  },
  {
    expiry: 'OCt 16,2023',
    image: R.image.Certificate(),
    title: 'once per week on top of this.',
  },
  {
    expiry: 'Dec 16,2025',
    image: R.image.Certificate(),
    title: 'once per week on top of this.',
  },
];

export const credentails = [
  {
    question: 'Credentials and Experience',
    experiences: [
      {
        title: 'Extensive coaching experience',
        text: 'John was the former coach of University of San Diego (’78—’96), and has coached over 25,000 students in the past 50 years',
      },
      {
        title: 'Industry recognition',
        text: 'John is a Four-time San Diego USPTA Coach-of-the-Year, inditeed to the USD Athletic Hall of Fame (2001), and his camp  is awarded Tennis Magazine`s Top-25 Adult Tennis Camps in 2006',
      },
      {
        title: 'Trusted by Students',
        text: 'Some of John’s students include Jane Smith (10th in NA) and Sam Wang (8th in NA)',
      },
    ],
  },
  {
    question: 'Session plan',
    answer:
      'For most people, a weekly tennis lesson is about the right number to maintain their development, as long as they are playing at least once per week on top of this.',
  },
];

export const menuItems = [
  {
    id: 0,
    title: 'Reviews',
    svg: <StarIconAcc height="90%" width="90%" />,
    screen: 'Reviews',
  },
  {
    id: 1,
    title: 'Insights',
    svg: <InsightsIconAcc height="90%" width="90%" />,
    screen: 'Insights',
  },
  {
    id: 2,
    title: 'Help',
    svg: <HelpIconAcc height="90%" width="90%" />,
    screen: 'EditProfile',
  },
  {
    id: 3,
    title: 'Edit Profile',
    svg: <ProfileIconAcc height="80%" width="80%" />,
    screen: 'EditProfile',
  },
  {
    id: 3,
    title: 'Edit Lesson Info',
    svg: <LessonIconAcc height="80%" width="80%" />,
    screen: 'EditLesson',
  },
  {
    id: 3,
    title: 'Settings',
    svg: <SettingIconAcc height="80%" width="80%" />,
    screen: 'Settings',
  },
];

export const steps = [
  {
    step: 'Step 1',
    heading: 'Setting up your lessons',
    things: [
      {id: uuid.v4(), isChecked: true, title: 'Set Lesson'},
      {id: uuid.v4(), isChecked: false, title: 'Address'},
      {id: uuid.v4(), isChecked: true, title: 'FAQ'},
      {id: uuid.v4(), isChecked: false, title: 'Price'},
    ],
  },
  {
    step: 'Step 2',
    heading: 'Set your schedule',
    things: [
      {id: uuid.v4(), isChecked: true, title: 'Schedule 1'},
      {id: uuid.v4(), isChecked: false, title: 'Schedule 2'},
    ],
  },
  {
    step: 'Step 3',
    heading: 'Getting to know you',
    things: [
      {id: uuid.v4(), isChecked: true, title: 'Personal Info'},
      {id: uuid.v4(), isChecked: false, title: 'Background Check'},
    ],
  },
];

export const onBoardSteps = [
  {
    step: 'Step 1',
    heading: 'Getting to know you',
    things: [
      {
        id: uuid.v4(),
        isChecked: true,
        title: 'Personal Info',
        screen: 'PersonalInfo',
      },
      {
        id: uuid.v4(),
        isChecked: false,
        title: 'Background Check',
        screen: 'BackgroundCheck',
      },
    ],
  },
  {
    step: 'Step 2',
    heading: 'Setting up your lessons',
    things: [
      {
        id: uuid.v4(),
        isChecked: true,
        title: 'Set Lesson',
        screen: 'SetLessons',
      },
      {
        id: uuid.v4(),
        isChecked: false,
        title: 'Address',
        screen: 'HostSession',
      },
      {id: uuid.v4(), isChecked: true, title: 'FAQ', screen: 'FAQ'},
      {id: uuid.v4(), isChecked: false, title: 'Price', screen: 'Payment'},
    ],
  },
  {
    step: 'Step 3',
    heading: 'Set your schedule',
    things: [
      {
        id: uuid.v4(),
        isChecked: false,
        title: 'Availability',
        screen: 'Availability',
      },
    ],
  },
];

export const lessonRequests = [
  {
    id: '1',
    picture: 'Step 1',
    name: 'Kate',
    text: 'Setting up your lessons',
    date: 'Aug 16, 2021',
    time: '12:30PM- 2:30PM',
    amount: 'Income $64',
    location: 'DeWitt Clinton Park, W 54th St, New York',
    message: 'Hi Ed, my son is interested in learning tennis!',
    isAccepted: false,
    createdAt: '14:30:10',
  },
  {
    id: '2',
    picture: 'Step 1',
    name: 'Tom',
    text: 'Setting up your lessons',
    date: 'Aug 16, 2021',
    time: '12:30PM- 2:30PM',
    amount: 'Income $64',
    location: 'DeWitt Clinton Park, W 54th St, New York',
    message: 'Hi Ed, my son is interested in learning tennis!',
    isAccepted: false,
    createdAt: '01:30:10',
  },
  {
    id: '3',
    picture: 'Step 1',
    name: 'Tyler Locke',
    text: 'is gonna be setting up your one - one lessons',
    date: 'Aug 16, 2021',
    time: '12:30PM- 2:30PM',
    amount: 'Income $64',
    location: 'DeWitt Clinton Park, W 54th St, New York',
    isAccepted: false,
    createdAt: '2:30:10',
  },
];

export const evaluations = [
  {
    id: '1',
    name: 'Kate',
    text: 'Locke attended on 1-on-1 Tennis lesson',
    date: 'Aug 16, 2021',
    time: '12:30PM- 2:30PM',
    amount: 'Income $64',
    location: 'DeWitt Clinton Park, W 54th St, New York',
    timeLeft: '2 days left',
    evaluation: 'Lorem Ispum',
    createdAt: '14:30:10',
    isEvaluated: false,
  },
  {
    id: '2',
    name: 'Tom',
    text: 'Locke attended on 1-on-1 Tennis lesson',
    date: 'Aug 16, 2021',
    time: '12:30PM- 2:30PM',
    amount: 'Income $64',
    location: 'DeWitt Clinton Park, W 54th St, New York',
    timeLeft: '3 days left',
    evaluation: 'Lorem ISPUM',
    isEvaluated: false,
  },
  {
    id: '3',
    name: 'Tyler Locke',
    text: 'Locke attended on 1-on-1 Tennis lesson',
    date: 'Aug 16, 2021',
    time: '12:30PM- 2:30PM',
    amount: 'Income $64',
    location: 'DeWitt Clinton Park, W 54th St, New York',
    timeLeft: '4 days left',
    evaluation: 'LOREM IDSPUTM',
    isEvaluated: false,
  },
];

export const lessonSchedules = [
  {
    id: '1',
    name: 'Kate',
    text: 'Locke attended on 1-on-1 Tennis lesson',
    date: 'Aug 16, 2021',
    time: '12:30PM- 2:30PM',
    amount: 'Income $64',
    location: 'DeWitt Clinton Park, W 54th St, New York',
    timeLeft: '2 days left',
    evaluation: 'Lorem Ispum',
    createdAt: '14:30:10',
    isAccepted: false,
  },
  {
    id: '2',
    name: 'Tom',
    text: 'Locke attended on 1-on-1 Tennis lesson',
    date: 'Aug 16, 2021',
    time: '12:30PM- 2:30PM',
    amount: 'Income $64',
    location: 'DeWitt Clinton Park, W 54th St, New York',
    timeLeft: '3 days left',
    evaluation: 'Lorem ISPUM',
    isAccepted: false,
    createdAt: '14:30:10',
  },
  {
    id: '3',
    name: 'Tyler Locke',
    text: 'Locke attended on 1-on-1 Tennis lesson',
    date: 'Aug 16, 2021',
    time: '12:30PM- 2:30PM',
    amount: 'Income $64',
    location: 'DeWitt Clinton Park, W 54th St, New York',
    timeLeft: '4 days left',
    evaluation: 'LOREM IDSPUTM',
    isAccepted: false,
    createdAt: '14:30:10',
  },
];

export const profileReports = [
  {
    id: '1',
    title: 'Kate Locke attended on 1-on-1 Tennis lesson',
    mainHead: 'NAME',
    text: 'Since onboarding check wasn’t approved - your account remains private.',
  },
  {
    id: '2',
    title: 'Tom Locke attended on 1-on-1 Tennis lesson',
    mainHead: 'NAME',
    text: 'Since onboarding check wasn’t approved - your account remains private.',
  },
  {
    id: '3',
    title: 'Tyler Locke',
    mainHead: 'NAME',
  },
];

export const locations = [
  {label: 'All', value: 'All'},
  {label: 'Royal Tennis Court', value: 'Royal Tennis Court'},
  {label: 'Green Tennis Court', value: 'Green Tennis Court'},
];

export const statuses = [
  {label: 'All', value: 'All'},
  {label: 'Evaluated', value: 'Evaluated'},
  {label: 'Not Evaluated', value: 'Not Evaluated'},
];

export const showArray = [
  {label: 'Newest first', value: 'Newest first'},
  {label: 'Oldest first', value: 'Oldest first'},
  {label: 'Highest rated', value: 'Highest rated'},
  {label: 'Lowest rated', value: 'Lowest rated'},
];

export const ratings = [
  {label: 'All Ratings', value: 'All'},
  {label: '1 Star', value: '1 Star'},
  {label: '2 Stars', value: '2 Stars'},
  {label: '3 Stars', value: '3 Stars'},
  {label: '4 Stars', value: '4 Stars'},
  {label: '5 Stars', value: '5 Stars'},
];

export const chatsList = [
  {
    id: 1,
    name: 'Mackenzie McDonald',
    text1: 'Hi, John',
    text2: 'Lesson request',
    date: '5:32PM',
    picture: R.image.coachPic(),
    isRead: true,
  },
  {
    id: 2,
    name: 'Mackenzie McDon...',
    text1: 'Hi, John',
    text2: 'Upcoming lesson in 3 days',
    date: '5:32PM',
    isRead: false,
    picture: R.image.chatUser(),
  },
  {
    id: 3,
    name: 'Jeanie Wilson',
    text1: 'Hi, John',
    text2: 'Lesson request',
    date: '5:32PM',
    isRead: true,
    picture: R.image.coachPic(),
  },
  {
    id: 4,
    name: 'Bennedict Cumberbatch',
    text1: 'Hi, John',
    text2: 'Lesson request',
    date: '5:32PM',
    isRead: false,
  },
];

export const sportType = [
  {label: 'Tennis', value: 'Tennis'},
  {label: 'BasketBall', value: 'BasketBall'},
  {label: 'Soccerr', value: 'Soccerr'},
];

export const filterTags = [
  {index: 0, title: 'Show all'},
  {index: 1, title: 'Announcement'},
  {index: 2, title: 'Training report'},
  {index: 3, title: 'Training request'},
  {index: 4, title: 'Profile update'},
  {index: 5, title: 'Lesson booked'},
  {index: 6, title: 'Lesson cancelled'},
];

export const notificationsData = [
  {
    id: 1,
    title: 'Announcement',
    description: 'Added new sports and the ability to complain about users.',
    isSeen: false,
    image: R.image.NotiLogo(),
    type: 'certificate',
    status: 'Send feedback',
  },
  {
    id: 2,
    title: 'Training report',
    description:
      'How was your last 1-on-1 Tennis Lesson with Ed Collins on Jul 20,2021?',
    isSeen: false,
    image: R.image.NotiLogo(),
    type: 'certificate',
    status: 'Leave review',
  },
  {
    id: 3,
    title: '1-on-1 Tennis Lesson',
    description: 'with Ed Collins on Jul 20',
    isSeen: false,
    image: R.image.NotiLogo(),
    type: 'certificate',
    status: 'Cancel lesson',
    sessionText: 'July 20 (Today) 1:30am to  2:30am Royal Tennis Court',
    date: new Date(2022, 8, 27),
  },
  {
    id: 4,
    title: 'Payment update',
    description:
      'You got payed $65 for a 1-on-1 tennis lesson with Ed Collins on July 18th.',
    isSeen: false,
    image: R.image.TickNotiLogo(),
    type: 'certificate',
    status: 'Send feedback',
    date: new Date(2022, 8, 23),
  },
  {
    id: 5,
    title: 'Profile onboarding',
    description:
      'Your onboarding has been expired. Since onboarding check wasn’t approved - your account remains private.',
    isSeen: false,
    image: R.image.TickNotiLogo(),
    type: 'certificate',
    status: 'Send feedback',
    sessionText: 'July 20 (Today) 1:30am to  2:30am Royal Tennis Court',
    date: new Date(2022, 8, 22),
  },
  {
    id: 6,
    title: '1-on-1 Tennis Lesson',
    description:
      'You have canceled 1-on-1 Tennis Lesson with Ed Collins on Jul 20',
    isSeen: false,
    image: R.image.CrossNotiLogo(),
    type: 'certificate',
    sessionText: 'July 20 (Today) 1:30am to  2:30am Royal Tennis Court',
    date: new Date(2022, 8, 20),
  },
  {
    id: 7,
    title: 'Profile onboarding',
    description:
      'Your onboarding has been expired. Since onboarding check wasn’t approved - your account remains private.',
    isSeen: false,
    image: R.image.CrossNotiLogo(),
    type: 'certificate',
    sessionText: 'July 20 (Today) 1:30am to  2:30am Royal Tennis Court',
    date: new Date(2022, 8, 20),
  },
  {
    id: 8,
    title: 'Certifications',
    description: 'Your "Certificate Name" certificate has been declined.',
    isSeen: false,
    image: R.image.CrossNotiLogo(),
    type: 'certificate',
    status: 'Add certificate',
    sessionText: 'July 20 (Today) 1:30am to  2:30am Royal Tennis Court',
    date: new Date(2022, 8, 20),
  },
  {
    id: 8,
    title: 'Certifications',
    description:
      'Certifications: Your "Certificate Name" certificate has been approved.',
    isSeen: false,
    image: R.image.TickNotiLogo(),
    type: 'certificate',
    status: 'Add certificate',

    date: new Date(2022, 8, 20),
  },
];

export const reportData = [
  {
    id: uuid.v4(),
    title: 'The student was late for training.',
    isChecked: false,
  },
  {
    id: uuid.v4(),
    title: 'The student did not show up for training.',
    isChecked: false,
  },
  {id: uuid.v4(), title: 'Boorish behavior.', isChecked: false},
  {id: uuid.v4(), title: 'Other (nothing from the above)', isChecked: false},
];

export const coachTags = [
  {sportName: 'Tennis', expLevel: 'Beginner'},
  {sportName: 'Box', expLevel: 'Beginner'},
];

export const coachLists = [
  {
    image: R.image.coachPic(),
    name: 'Mackenzie McDonald',
    sportName: 'Tennis',
    rating: 5.0,
    review: 5,
    city: 'Washington',
    state: 'DC',
  },
  {
    image: R.image.coachPic2(),
    name: 'Kate Smith',
    sportName: 'Tennis',
    rating: 4.3,
    review: 7,
    city: 'Kansas',
    state: 'Texas',
  },
  {
    image: R.image.coachPic2(),
    name: 'Kate Smith',
    sportName: 'Tennis',
    rating: 4.3,
    review: 7,
    city: 'Kansas',
    state: 'Texas',
  },
];

export const analyticsData = [
  {
    title: 'Income this week',
    value: '$500',
    svg: <MoneyIcon height="100%" width="100%" />,
  },
  {
    title: 'Hours worked',
    value: '22',
    svg: <ClockAnalyticIcon height="100%" width="100%" />,
  },
  {
    title: 'No. of sessions',
    value: '24',
    svg: <StarIcon height="100%" width="100%" />,
  },
  {
    title: 'No. of students',
    value: '5',
    svg: (
      <ProfileAnalyticIcon
        height="100%"
        width="100%"
        fill={R.color.mainColor}
      />
    ),
  },
];

export const insightsFilterTags = [
  {index: 0, title: 'This Week'},
  {index: 1, title: 'This Month'},
  {index: 2, title: 'This Quarter'},
  {index: 3, title: 'This Year'},
  {index: 4, title: 'All Time'},
];

export const seasonFilters = [
  {label: 'All', value: 'All'},
  {label: 'Summer', value: 'Summer'},
  {label: 'Autumn', value: 'Autumn'},
  {label: 'Winter', value: 'Winter'},
  {label: 'Spring', value: 'Spring'},
];

export const sportFilters = [
  {index: 0, label: 'Tennis', value: 'Tennis'},
  {index: 1, label: 'Soccer', value: 'Soccer'},
  {index: 2, label: 'Baseball', value: 'Baseball'},
  {index: 3, label: 'Skating', value: 'Skating'},
  {index: 4, label: 'Football', value: 'Football'},
];

export const transactions = [
  {index: 0, date: new Date(), value: 75},
  {index: 1, date: new Date(), value: 150},
  {index: 2, date: new Date(), value: 275},
  {index: 3, date: new Date(), value: 475},
];

export const skillLevel = [
  {title: 'Footwork'},
  {title: 'Proper serve'},
  {title: 'Balance and reflex response'},
  {title: 'Fore-hand and back-hand drills'},
  {title: 'Hustle Drills'},
  {title: 'Playing at the Net'},
  {title: 'Doubleheader Match - 15 minutes'},
];

export const provided = [
  {title: 'Grips'},
  {title: 'Racquet string'},
  {title: 'Tennis racquet'},
  {title: 'Tennis Balls'},
  {title: 'Hustle Drills'},
  {title: 'Practice skirt'},
];

export const sessionLocations = [
  {
    venue: 'Royal Tennis Court',
    direction: 'DeWitt Clinton Park, W 54th St, New York, NY',
  },
  {
    venue: 'Royal Tennis Court',
    direction: 'DeWitt Clinton Park, W 54th St, New York, NY',
  },
  {
    venue: 'Royal Tennis Court',
    direction: 'DeWitt Clinton Park, W 54th St, New York, NY',
  },
];

export const calendarType = [
  {index: 0, label: 'Day', value: 'Day'},
  {index: 1, label: 'Week', value: 'Week'},
  {index: 2, label: 'Month', value: 'Month'},
  {index: 3, label: 'List', value: 'Skating'},
];
export const alaramData = [
  {id: 0, title: 'Repeats weekly', isChecked: false},
  {id: 1, title: 'Repeats monthly', isChecked: false},
  {id: 2, title: 'Does not repeat', isChecked: false},
];
export const availabityLocs = [
  {id: 0, title: 'Royal Tennis Court', isChecked: false},
  {id: 1, title: 'Green Tennis Court', isChecked: false},
];

export const searchedCoaches = [
  {
    id: '1',
    picture: 'Step 1',
    name: 'Benedict Cumberbatch',
    rating: '4.7',
    sportName: 'Baseball',
    away: '0.6',
    rate: '75',
    locationCoordinates: {
      latitude: -34.9462,
      longitude: 138.5867,
    },
    location: 'DeWitt Cli nton Park, W 54th St, New York',
    message:
      'Professionally experienced knowledgeable coach of athletes from youths through collegiate level in tennis Professionally experienced knowledgeable coach of athletes from youths through collegiate level in tennis ',
  },
  {
    id: '2',
    picture: 'Step 1',
    name: 'John Jhonson',
    rating: '4.3',
    sportName: 'Basketball ',
    away: '100',
    rate: '42',
    locationCoordinates: {
      latitude: -34.956,
      longitude: 138.5653,
    },
    location: 'DeWitt Clinton Park, W 54th St, New York',
    message:
      'Professionally experienced knowledgeable coach of athletes from youths through collegiate level in tennis Professionally experienced knowledgeable coach of athletes from youths through collegiate level in tennis ',
  },
  {
    id: '3',
    picture: 'Step 1',
    name: 'Tyler Locke',
    rating: '4.7',
    sportName: 'Tennis',
    away: '50',
    rate: '64',
    locationCoordinates: {
      latitude: -34.9147,
      longitude: 138.6064,
    },
    location: 'DeWitt Clinton Park, W 54th St, New York',
    message:
      'Professionally experienced knowledgeable coach of athletes from youths through collegiate level in tennis Professionally experienced knowledgeable coach of athletes from youths through collegiate level in tennis ',
  },
  {
    id: '4',
    picture: 'Step 1',
    name: 'Tyler Locke',
    rating: '4.7',
    sportName: 'Tennis',
    away: '50',
    rate: '64',
    locationCoordinates: {
      latitude: -34.901,
      longitude: 138.4878,
    },
    location: 'DeWitt Clinton Park, W 54th St, New York',
    message:
      'Professionally experienced knowledgeable coach of athletes from youths through collegiate level in tennis Professionally experienced knowledgeable coach of athletes from youths through collegiate level in tennis ',
  },
];

export const studentReviews = [
  {
    id: '1',
    picture: R.image.coachPic(),
    name: 'Jessica M',
    text: 'John has a knack. He can teach through his writings. He inspires confidence in his students, and by reading. Watch the Ball, you`ll be inspired too.',
    date: 'Aug 16, 2021',
    rating: 3,
    totalnoofcompliment: 10,
    compliment: 'Encouraging',
    tags: ['Friendly to kids', 'Competitive'],
    svg: <EncouragingIcon height="100%" width="100%" />,
  },
  {
    id: '2',
    picture: R.image.coachPic2(),
    name: 'Kate',
    text: 'John has a knack. He can teach through his writings. He inspires confidence in his students, and by reading. Watch the Ball, you`ll be inspired too.',
    date: 'Aug 16, 2021',
    rating: 3,
    totalnoofcompliment: 9,
    compliment: 'Friendly',
    tags: ['Friendly to kids', 'Competitive', 'Encouraging'],
    svg: <FriendlyIcon height="100%" width="100%" />,
  },
  {
    id: '3',
    picture: R.image.coachPic(),
    name: 'Gregory R',
    text: 'John has a knack. He can teach through his writings. He inspires confidence in his students, and by reading. Watch the Ball, you`ll be inspired too.',
    date: 'Aug 16, 2021',
    rating: 4,
    totalnoofcompliment: 23,
    compliment: 'Competitive',
    tags: ['Friendly to kids', 'Competitive', 'Encouraging'],
    svg: <EncouragingIcon height="100%" width="100%" />,
  },
];

export const coachScheduleTimes = [
  {
    range: '17-23 Aug',
    id: 'a1',
    dates: [
      {
        date: 'Tue, Aug 17',
        slots: [
          {time: '9:30', isChecked: false, id: 'a1a1'},
          {time: '10:00', isChecked: false, id: 'a1a2'},
          {time: '10:30', isChecked: false, id: 'a1a3'},
          {time: '11:00', isChecked: false, id: 'a1a4'},
          {time: '11:30', isChecked: false, id: 'a1a5'},
          {time: '12:00', isChecked: false, id: 'a1a6'},
          {time: '12:30', isChecked: false, id: 'a1a7'},
          {time: '13:00', isChecked: false, id: 'a1a8'},
          {time: '13:30', isChecked: false, id: 'a1a9'},
          {time: '14:00', isChecked: false, id: 'a1a10'},
        ],
        id: 'a1a',
      },
      {
        date: 'Wed, Aug 18',
        slots: [
          {time: '9:30', isChecked: false, id: 'a1b1'},
          {time: '10:00', isChecked: false, id: 'a1b2'},
          {time: '10:30', isChecked: false, id: 'a1b3'},
          {time: '11:00', isChecked: false, id: 'a1b4'},
          {time: '11:30', isChecked: false, id: 'a1b5'},
          {time: '12:00', isChecked: false, id: 'a1b6'},
          {time: '12:30', isChecked: false, id: 'a1b7'},
          {time: '13:00', isChecked: false, id: 'a1b8'},
          {time: '13:30', isChecked: false, id: 'a1b9'},
          {time: '14:00', isChecked: false, id: 'a1b10'},
        ],
        id: 'a1b',
      },
      {
        date: 'Thu, Aug 19',
        slots: [
          {time: '9:30', isChecked: false, id: 'a1c1'},
          {time: '10:00', isChecked: false, id: 'a1c2'},
          {time: '10:30', isChecked: false, id: 'a1c3'},
          {time: '11:00', isChecked: false, id: 'a1c4'},
          {time: '11:30', isChecked: false, id: 'a1c5'},
          {time: '12:00', isChecked: false, id: 'a1c6'},
          {time: '12:30', isChecked: false, id: 'a1c7'},
          {time: '13:00', isChecked: false, id: 'a1c8'},
        ],
        id: 'a1c',
      },
      {
        date: 'Fri, Aug 20',
        slots: [],
        id: 'a1d',
      },
      {
        date: 'Sat, Aug 21',
        slots: [],
        id: 'a1e',
      },
      {
        date: 'Sun, Aug 22',
        slots: [],
        id: 'a1f',
      },
    ],
  },
  {
    range: '23-29 Aug',
    id: 'b1',
    dates: [
      {
        date: 'Sat, Aug 23',
        slots: [
          {time: '9:30', isChecked: false, id: 'b1a1'},
          {time: '10:00', isChecked: false, id: 'b1a2'},
          {time: '10:30', isChecked: false, id: 'b1a3'},
        ],
        id: 'b1a',
      },
      {
        date: 'Sun, Aug 24',
        slots: [
          {time: '9:30', isChecked: false, id: 'b1b1'},
          {time: '10:00', isChecked: false, id: 'b1b2'},
          {time: '10:30', isChecked: false, id: 'b1b3'},
          {time: '11:00', isChecked: false, id: 'b1b4'},
          {time: '11:30', isChecked: false, id: 'b1b5'},
          {time: '12:00', isChecked: false, id: 'b1b6'},
          {time: '12:30', isChecked: false, id: 'b1b7'},
          {time: '13:00', isChecked: false, id: 'b1b8'},
          {time: '13:30', isChecked: false, id: 'b1b9'},
        ],
        id: 'b1b',
      },
    ],
  },
];

export const studentScheduledData = [
  {
    id: 1,
    title: '1-on-1 Tennis Lesson with Mackenzie McDonald',
    category: 'mylessons',
    image: R.image.coachPic2(),
    date: 'Aug 27,2021',
    time: '12:30- 2:30pm',
    location: 'DeWitt Clinton Park, W 54th St, New York, NY',
    isCompleted: true,
    timeLeft: '24 hrs left',
  },
  {
    id: 2,
    title: '1-on-1 Tennis Lesson with Benedict Cumberbatch',
    category: 'mylessons',
    image: R.image.coachPic(),
    date: 'Aug 28,2021',
    time: '3:30- 5:30pm',
    location: 'DeWitt Clinton Park, W 54th St, New York, NY',
    isCompleted: true,
    timeLeft: '14 hrs left',
  },
  {
    id: 3,
    title: '1-on-1 Tennis Lesson with Mackenzie McDonald',
    category: 'mylessons',
    image: R.image.coachPic2(),
    date: 'Aug 27,2021',
    time: '12:30- 2:30pm',
    location: 'DeWitt Clinton Park, W 54th St, New York, NY',
    isCompleted: false,
    timeLeft: '24 hrs left',
  },
  {
    id: 4,
    title: '1-on-1 Tennis Lesson with Mackenzie McDonald',
    category: 'evaluation',
    description:
      'John has a knack. He can teach through his writings. He inspires confidence in his students, and by reading. Watch the Ball, you ll be inspired too.',
    image: R.image.coachPic2(),
    date: 'Aug 27,2021',
    time: '12:30- 2:30pm',
    location: 'DeWitt Clinton Park, W 54th St, New York, NY',
    isCompleted: true,
    timeLeft: '24 hrs left',
  },
  {
    id: 5,
    title: '1-on-1 Tennis Lesson with Mackenzie McDonald',
    category: 'evaluation',
    description:
      'John has a knack. He can teach through his writings. He inspires confidence in his students, and by reading. Watch the Ball, you ll be inspired too.',
    image: R.image.coachPic2(),
    date: 'Aug 27,2021',
    time: '12:30- 2:30pm',
    location: 'DeWitt Clinton Park, W 54th St, New York, NY',
    isCompleted: true,
    timeLeft: '24 hrs left',
  },
  {
    id: 6,
    title: '1-on-1 Tennis Lesson with Mackenzie McDonald',
    category: 'evaluation',
    description:
      'John has a knack. He can teach through his writings. He inspires confidence in his students, and by reading. Watch the Ball, you ll be inspired too.',
    image: R.image.coachPic2(),
    date: 'Aug 27,2021',
    time: '12:30- 2:30pm',
    location: 'DeWitt Clinton Park, W 54th St, New York, NY',
    isCompleted: true,
    timeLeft: '24 hrs left',
  },
  {
    id: 7,
    category: 'transaction',
    date: '12/13/19',
    time: '12:30- 2:30pm',
    isTransferred: false,
    payment: 75,
    cardType: 'Visa',
    last4: '1234',
  },
  {
    id: 8,
    category: 'transaction',
    date: '12/13/19',
    time: '12:30- 2:30pm',
    isTransferred: true,
    payment: 125,
    cardType: 'Visa',
    last4: '3679',
  },
  {
    id: 9,
    category: 'transaction',
    date: '12/13/19',
    time: '12:30- 2:30pm',
    isTransferred: true,
    payment: 55,
    cardType: 'Visa',
    last4: '5213',
  },
];

export const reportLessonData = [
  {
    id: 1,
    title: 'The coach was late for training.',
    isChecked: false,
  },
  {
    id: 2,
    title: 'The coach did not show up for training.',
    isChecked: false,
  },
  {id: 3, title: 'Boorish behavior.', isChecked: false},
  {id: 4, title: 'Other (nothing from the above)', isChecked: false},
];
