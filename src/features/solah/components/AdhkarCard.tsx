import React from 'react';
import { DimensionValue, Image, ImageSourcePropType, Pressable, Text, View } from 'react-native';
import { styles } from './AdhkarCard.styles';

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


export { AdhkarCard };

