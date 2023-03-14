import React, {useState, useEffect} from 'react';
import {Image as ImageC, StyleSheet, View} from 'react-native';
import R from '@components/utils/R';
import {imageUrl} from '@config/apiUrl';
import {Get} from '@axios/AxiosInterceptorFunction';

function Image(props) {
  const {
    resizeMode = 'cover',
    onLoadImageUrl = R.image.userPin(),
    imageSource,
    imageStyles,
    imageContainerStyles,
  } = props;
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(undefined);

  useEffect(() => {
    imageGetter();
  }, [imageSource]);

  const imageGetter = async () => {
    // try {
    //   setLoading(true);
    //   const url = imageUrl(imageSource);
    //   const response = await Get(url);
    //   if (response !== undefined) {
    //     setImage(response?.data?.data?.url);
    //     setLoading(false);
    //   }
    // } catch (error) {
    //   setLoading(false);
    // }
  };

  return (
    <View style={[styles.imageContainer, imageContainerStyles]}>
      {loading ? (
        <ImageC
          resizeMode={resizeMode}
          style={[styles.image, imageStyles]}
          source={onLoadImageUrl}
          blurRadius={20}
          // imageStyles={{height: '100%', width: '100%'}}
        />
      ) : (
        <ImageC
          resizeMode={resizeMode}
          style={[styles.image, imageStyles]}
          source={image ? {uri: image} : imageSource}
          // imageStyles={{height: '100%', width: '100%'}}
        />
      )}
    </View>
  );
}
export default Image;

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    borderRadius: R.unit.scale(230),
    borderColor: R.color.black,
    borderWidth: 1.5,
    shadowColor: R.color.mainColor,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    overflow: 'hidden',
  },
});
