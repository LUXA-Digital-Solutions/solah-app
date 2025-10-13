import React from 'react';
import { DimensionValue, Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';

export type AdhkarCardProps = {
  title: string;
  subtitle: string;
  onPress: () => void;
  variant?: 'large' | 'small';
  width?: DimensionValue;
  height?: DimensionValue;
  backgroundColor?: string;
  illustration?: ImageSourcePropType;
};

const AdhkarCard: React.FC<AdhkarCardProps> = ({
  title,
  subtitle,
  onPress,
  variant = 'small',
  width = 182,
  height = 126,
  backgroundColor = '#FDFDFD',
  illustration,
}) => {
  let titleColor = '#B37B56';
  let subtitleColor = '#483020';
  const isFirstCard = backgroundColor === '#7F5539';

  if (isFirstCard) {
    titleColor = '#E6D3C7';
    subtitleColor = '#FDFDFD';
  }

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { width, height, backgroundColor },
        variant === 'large' && styles.largeContainer,
      ]}
    >
      {/* Text Content */}
      <View style={styles.textContainer}>
        <View style={[
          styles.textWrapper,
          isFirstCard ? styles.firstCardTextWrapper : styles.otherCardsTextWrapper
        ]}>
          <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
          <Text style={[
            styles.subtitle, 
            { color: subtitleColor },
            isFirstCard && styles.firstCardSubtitle 
          ]}>
            {subtitle}
          </Text>
        </View>
      </View>

      {/* Image */}
      {illustration && (
        <Image
          source={illustration}
          style={[
            styles.illustration,
            isFirstCard ? styles.firstCardIllustration : styles.otherCardsIllustration,
            { height: '100%' }
          ]}
          resizeMode="cover"
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFDFD',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    margin: 0,
    overflow: 'hidden',
  },
  textContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  textWrapper: {
    position: 'absolute',
    left: 10,
    right: 10,
    zIndex: 2,
  },
  // FIRST CARD ONLY 
  firstCardTextWrapper: {
    top: '30%',
    transform: [{ translateY: -20 }],
  },
  firstCardSubtitle: {
    fontSize: 30, 
    lineHeight: 35,
  },
  // SECOND & THIRD CARDS 
  otherCardsTextWrapper: {
    top: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#B37B56',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20, 
    color: '#483020',
    lineHeight: 24,
    flexWrap: 'wrap',
  },
  illustration: {
    position: 'absolute',
    right: -10,
    zIndex: 1,
  },
  // FIRST CARD ONLY 
  firstCardIllustration: {
    width: 100,
    bottom: -30,
  },
  // SECOND & THIRD CARDS 
  otherCardsIllustration: {
    width: 90,
    bottom: 0,
  },
  largeContainer: {
    // Large container styles
  },
});

export { AdhkarCard };

