import { Image, ImageSource, ImageProps } from "expo-image";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//A simple image component that accepts only the source, handles lazy loading by the expo-image component's default behavior

type ImageComponentProps = ImageProps & {
  src: ImageSource;
};
export function ImageComponent({ src, style }: ImageComponentProps) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={src} style={style} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
