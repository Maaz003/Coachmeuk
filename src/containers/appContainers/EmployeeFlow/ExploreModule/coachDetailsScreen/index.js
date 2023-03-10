import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Icon from '@components/common/Icon';
import Divider from '@components/common/Divider';
import VariationsDisplay from '@components/view/screens/onBoardingCoach/PreviewProfile/VariationsDisplay';
import CommonQuestions from '@components/view/screens/onBoardingCoach/PreviewProfile/CommonQuestions';
import LocationsDisplay from '@components/view/screens/onBoardingCoach/PreviewProfile/LocationsDisplay';
import CertificatesDisplay from '@components/view/screens/onBoardingCoach/PreviewProfile/CertificatesDisplay';
import CredentialsDisplay from '@components/view/screens/onBoardingCoach/PreviewProfile/CredentialsDisplay';
import {
  bioUser,
  commonQuestions,
  credentails,
  studentReviews,
  variations,
} from '@components/constants';
import Button from '@components/common/Button';
import ToDoErrorDisplay from '@components/view/screens/ToDo/ToDoErrorDisplay';
import ReviewCard from '@components/view/cards/ReviewCard';
import CoachAvailabilityModal from '@components/view/modal/StudentModals/CoachAvailabilityModal';

function CoachDetailsScreen(props) {
  const {navigation} = props;
  const [isActive, setIsActive] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarVisible: false,
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarVisible: true,
      });
  }, [navigation]);

  const keyNotes = [
    {title: 'Accurancy', value: 4},
    {title: 'Location', value: 5},
    {title: 'Value', value: 3},
    {title: 'Communication', value: 5},
  ];

  const emptyListComponent = () => {
    return (
      <View style={{flex: 1}}>
        <ToDoErrorDisplay
          icon={<LessonRequestErrorIcon height="100%" width="100%" />}
          heading={'You have no reviews yet'}
          text={
            'As soon as someone gives a review it will appear in this list.'
          }
        />
      </View>
    );
  };

  const keyExtractor = item => item.id;

  const _renderList = ({item, index}) => {
    return <ReviewCard data={item} index={index} arr={studentReviews} />;
  };

  return (
    <View style={[R.styles.container, styles.mainLayout]}>
      <ScrollView
        style={[R.styles.container, styles.mainLayout]}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.mediaView}>
          <View style={styles.mediaHeader}>
            <View style={R.styles.rowView}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}>
                <Icon
                  name={'keyboard-arrow-left'}
                  type={'MaterialIcons'}
                  color={R.color.white}
                  size={25}
                />
              </TouchableOpacity>

              <View style={R.styles.twoItemsRow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    marginRight: R.unit.scale(24),
                  }}>
                  <Icon
                    name={'share-social-outline'}
                    type={'Ionicons'}
                    color={R.color.white}
                    size={25}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setIsFav(!isFav)}>
                  <Icon
                    name={isFav ? 'heart' : 'heart-outline'}
                    type={'Ionicons'}
                    color={isFav ? R.color.mainColor : R.color.white}
                    size={25}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.contentView}>
          <View style={[R.styles.twoItemsRow, styles.nameView]}>
            <Image
              source={R.image.BaseBallSport()}
              style={{borderRadius: R.unit.scale(10)}}
            />
            <Text
              variant={'h3'}
              font={'Sequel651'}
              color={R.color.black}
              align={'left'}
              style={{flex: 1, marginLeft: R.unit.scale(16)}}
              transform={'none'}>
              Michael Baumgardner
            </Text>
          </View>

          <View style={[R.styles.rowView, styles.locationView]}>
            <View style={R.styles.rowView}>
              <Icon
                name={'star'}
                type={'Foundation'}
                color={R.color.mainColor}
                size={25}
              />
              <Text
                variant={'body3'}
                font={'InterRegular'}
                color={R.color.blackShade4}
                align={'left'}
                style={{marginLeft: R.unit.scale(8)}}
                transform={'none'}>
                5.0
              </Text>
              <Text
                variant={'body3'}
                font={'InterRegular'}
                color={R.color.gray}
                align={'left'}
                style={{
                  marginLeft: R.unit.scale(4),
                  textDecorationLine: 'underline',
                }}
                transform={'none'}>
                (7 reviews)
              </Text>
            </View>

            <View style={R.styles.rowView}>
              <Text
                variant={'body3'}
                font={'InterSemiBold'}
                color={R.color.blackShade4}
                align={'left'}
                style={{marginRight: R.unit.scale(8)}}
                transform={'none'}>
                Tennis coach
              </Text>
              <View style={R.styles.dot} />
              <Text
                variant={'body3'}
                font={'InterSemiBold'}
                color={R.color.blackShade4}
                align={'left'}
                style={{
                  marginLeft: R.unit.scale(8),
                }}
                transform={'none'}>
                New York
              </Text>
            </View>
          </View>

          <Divider />

          <Text
            variant={'body3'}
            font={'InterRegular'}
            color={R.color.black}
            align={'left'}
            numberOfLines={isActive ? 100 : 3}
            transform={'none'}>
            {bioUser}
          </Text>

          <TouchableOpacity
            onPress={() => setIsActive(!isActive)}
            activeOpacity={0.9}
            style={[R.styles.twoItemsRow, styles.showMoreLayout]}>
            <Icon
              name={isActive ? 'keyboard-arrow-up' : 'keyboard-arrow-right'}
              type={'MaterialIcons'}
              color={R.color.blackShade4}
              size={25}
            />
            <Text
              variant={'body3'}
              font={'InterSemiBold'}
              color={R.color.blackShade4}
              align={'left'}
              style={{marginLeft: R.unit.scale(5)}}
              transform={'none'}>
              {isActive ? 'Show Less' : 'Show More'}
            </Text>
          </TouchableOpacity>

          {variations?.map((item, index) => {
            return <VariationsDisplay key={index} item={item} />;
          })}

          {credentails?.length > 0 && (
            <>
              <CredentialsDisplay options={credentails} />
            </>
          )}

          <Divider lineStyles={{height: R.unit.scale(0.7), marginBottom: 0}} />

          <CertificatesDisplay />

          <Text
            variant={'h3'}
            font={'Sequel551'}
            color={R.color.black}
            align={'left'}
            gutterTop={48}
            gutterBottom={24}
            transform={'none'}>
            Training locations
          </Text>

          <LocationsDisplay />

          <Text
            variant={'h3'}
            font={'Sequel551'}
            color={R.color.black}
            align={'left'}
            gutterTop={48}
            gutterBottom={24}
            transform={'none'}>
            Common questions
          </Text>

          <Divider lineStyles={{height: R.unit.scale(0.7), marginBottom: 0}} />

          {commonQuestions?.length > 0 && (
            <>
              <CommonQuestions options={commonQuestions} />
            </>
          )}

          <Text
            variant={'h3'}
            font={'Sequel551'}
            color={R.color.black}
            align={'left'}
            gutterTop={48}
            gutterBottom={24}
            transform={'none'}>
            What our student say
          </Text>

          <ScrollView horizontal>
            {studentReviews?.map((item, index) => {
              return (
                <View style={styles.studentReviewBox} key={index}>
                  <View style={{...R.styles.svgView, height: R.unit.scale(40)}}>
                    {item?.svg}
                  </View>
                  <Text
                    variant={'body2'}
                    font={'InterRegular'}
                    color={R.color.charcoalShade2}
                    align={'center'}
                    gutterTop={12}
                    numberOfLines={2}
                    gutterBottom={4}
                    transform={'none'}>
                    {item?.compliment}
                  </Text>
                  <Text
                    variant={'body3'}
                    font={'InterRegular'}
                    color={R.color.black}
                    align={'left'}
                    style={styles.noOfComplimentsText}
                    transform={'none'}>
                    {item?.totalnoofcompliment}
                  </Text>
                </View>
              );
            })}
          </ScrollView>

          <View style={[R.styles.rowView, styles.testimonialsView]}>
            <Text
              variant={'h3'}
              font={'Sequel551'}
              color={R.color.black}
              align={'left'}
              lineHeight={30}
              transform={'none'}>
              Testimonials
            </Text>
            <View style={R.styles.twoItemsRow}>
              <Icon
                name={'star'}
                type={'Foundation'}
                color={R.color.mainColor}
                size={16}
              />
              <Text
                variant={'body2'}
                font={'Sequel551'}
                lineHeight={30}
                style={{marginLeft: R.unit.scale(8)}}
                color={R.color.black}
                align={'left'}
                transform={'none'}>
                4.0
              </Text>
            </View>
          </View>

          {keyNotes?.map((item, index, arr) => {
            return (
              <View key={index}>
                <Text
                  variant={'body2'}
                  font={'InterRegular'}
                  color={R.color.blackShade4}
                  align={'left'}
                  transform={'none'}>
                  {item.title}
                </Text>
                <View
                  style={{
                    ...R.styles.twoItemsRow,
                    marginBottom:
                      index === arr.length - 1 ? 0 : R.unit.scale(8),
                  }}>
                  <View style={{width: '90%'}}></View>

                  <Text
                    variant={'body3'}
                    font={'InterSemiBold'}
                    color={R.color.blackShade4}
                    style={{width: '10%'}}
                    align={'right'}
                    transform={'none'}>
                    {item.value}.0
                  </Text>
                </View>
              </View>
            );
          })}

          <Divider lineStyles={{marginVertical: R.unit.scale(24)}} />

          <FlatList
            data={studentReviews}
            renderItem={_renderList}
            nestedScrollEnabled
            onEndReachedThreshold={Platform.OS === 'ios' ? 0.3 : 0.001}
            removeClippedSubviews={true}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={emptyListComponent}
          />

          <Button
            value={'Show More'}
            bgColor={R.color.white}
            width={'100%'}
            size={'lg'}
            font={'InterMedium'}
            variant={'body3'}
            gutterTop={32}
            color={R.color.blackShade4}
            borderColor={R.color.gray4}
            disabled={false}
            loaderColor={R.color.white}
            borderWidth={0.75}
            onPress={() => null}
          />
        </View>
      </ScrollView>
      <View style={[R.styles.rowView, styles.buttonContainer]}>
        <View>
          <Text
            variant={'body2'}
            font={'Sequel451'}
            color={R.color.black}
            align={'left'}
            transform={'none'}>
            $75 / hr
          </Text>
          <Text
            variant={'body3'}
            font={'InterRegular'}
            color={R.color.gray}
            align={'left'}
            transform={'none'}>
            per person
          </Text>
        </View>
        <View style={[R.styles.twoItemsRow, styles.buttonLayout]}>
          <TouchableOpacity style={styles.messageButton} activeOpacity={0.6}>
            <Icon
              type={'Ionicons'}
              name={'chatbubble-ellipses-outline'}
              color={R.color.blackShade4}
              size={20}
            />
          </TouchableOpacity>

          <Button
            value={'Book a lesson'}
            bgColor={R.color.mainColor}
            width={'71%'}
            size={'lg'}
            font={'InterMedium'}
            variant={'body3'}
            color={R.color.white}
            borderColor={R.color.mainColor}
            disabled={false}
            loaderColor={R.color.white}
            borderWidth={0.75}
            onPress={() => setIsModal(!isModal)}
          />
        </View>
      </View>
      <CoachAvailabilityModal isVisibleModal={isModal} />
    </View>
  );
}
export default CoachDetailsScreen;

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
    paddingHorizontal: 0,
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 20,
  },
  contentView: {
    paddingHorizontal: R.unit.scale(16),
    width: '100%',
    justifyContent: 'center',
  },
  mediaView: {
    width: '100%',
  },
  mediaHeader: {
    position: 'absolute',
    zIndex: 9999,
    paddingHorizontal: R.unit.scale(16),
    width: '100%',
    top: R.unit.height(0.04),
  },
  testimonialsView: {
    marginTop: R.unit.scale(48),
    alignItems: 'baseline',
    marginBottom: R.unit.scale(24),
  },
  nameView: {
    marginTop: R.unit.scale(16),
  },
  locationView: {
    marginTop: R.unit.scale(16),
    marginBottom: R.unit.scale(16),
  },
  listView: {
    width: '100%',
    marginBottom: R.unit.scale(24),
  },
  svgView: {
    height: R.unit.scale(40),
    marginRight: R.unit.scale(24),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  showMoreLayout: {
    width: '30%',
    marginBottom: R.unit.scale(24),
    marginTop: R.unit.scale(8),
  },
  noOfComplimentsText: {
    paddingHorizontal: R.unit.scale(16),
    paddingVertical: R.unit.scale(5),
    backgroundColor: R.color.blueShade1,
    borderRadius: R.unit.scale(16),
    overflow: 'hidden',
  },
  buttonContainer: {
    width: R.unit.width(1),
    paddingHorizontal: R.unit.scale(16),
    paddingVertical: R.unit.scale(18),
    borderTopColor: R.color.gray4,
    borderTopWidth: R.unit.scale(1),
  },
  buttonLayout: {
    flex: 0.85,
    justifyContent: 'flex-end',
  },
  messageButton: {
    padding: R.unit.scale(
      Platform.OS == 'ios' && R.unit.width(1) > 1000 ? 16 : 15,
    ),
    borderColor: R.color.gray4,
    borderWidth: R.unit.scale(0.75),
    borderRadius: R.unit.scale(10),
    marginRight: R.unit.scale(8),
  },
  studentReviewBox: {
    borderRadius: R.unit.scale(16),
    borderColor: R.color.gray4,
    borderWidth: R.unit.scale(0.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: R.unit.scale(8),
    height: R.unit.scale(132),
    width: R.unit.scale(144),
  },
  tagLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
});
