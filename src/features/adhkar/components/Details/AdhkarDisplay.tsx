import React from "react";
import { View, Text, ScrollView } from "react-native";

import { adkharDisplayStyles as styles } from "@/features/adhkar/components/Details/AdhkarDisplay.styles";
import { DetailsActionBar } from "@/features/adhkar/components/Details/DetailsActionBar";
import { DetailsNavigator } from "@/features/adhkar/components/Details/DetailsNavigator";

export type AdhkarDisplayProps = {
  id: string;
  title?: string;
  arabic: string;
  transliteration?: string;
  translation?: string;
  onPrev?: () => void;
  onNext?: () => void;
  onShare?: () => void;
  onFavorite?: () => void;
  onPlay?: () => void;
};

export const AdhkarDisplay: React.FC<AdhkarDisplayProps> = ({
  title,
  arabic,
  transliteration,
  translation,
  onPrev,
  onNext,
  onShare,
  onFavorite,
  onPlay,
}) => {
  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <DetailsNavigator title={title} onPrev={onPrev} onNext={onNext} />

      <View style={styles.section}>
        <View style={styles.arabicTextWrap}>
          <Text style={styles.arabicText}>{arabic}</Text>
        </View>

        {transliteration ? <Text style={styles.transliteration}>{transliteration}</Text> : null}

        {translation ? <Text style={styles.translation}>{translation}</Text> : null}

        <DetailsActionBar onShare={onShare} onFavorite={onFavorite} onPlay={onPlay} />
      </View>

      <View style={styles.divider} />
    </ScrollView>
  );
};
