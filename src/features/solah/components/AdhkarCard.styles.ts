import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  firstCardTextWrapper: {
    top: '30%',
    transform: [{ translateY: -20 }],
  },
  firstCardSubtitle: {
    fontSize: 24,
    lineHeight: 32,
    marginTop: 8,
    marginBottom: 8,
  },
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
  firstCardIllustration: {
    width: 100,
    bottom: -30,
  },
  otherCardsIllustration: {
    width: 90,
    bottom: 0,
  },
  largeContainer: {
    // Large container styles
  },
});