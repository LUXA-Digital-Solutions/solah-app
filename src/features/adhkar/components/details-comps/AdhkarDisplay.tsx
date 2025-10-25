import React from "react";
import { View, Text, ScrollView } from "react-native";

import { AdhkarItem } from "@/features-adhkar/data";

import { adkharDisplayStyles as styles } from "./AdhkarDisplay.styles";
import { DetailsActionBar } from "./DetailsActionBar";
import { DetailsNavigator } from "./DetailsNavigator";

export type AdhkarDisplayProps = {
  item: AdhkarItem;
  onPrev?: () => void;
  onNext?: () => void;
  onShare?: () => void;
  onFavorite?: () => void;
  onPlay?: () => void;
};

export const AdhkarDisplay: React.FC<AdhkarDisplayProps> = ({ item }) => {
  const { entries } = item;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <DetailsNavigator item={item} />

      {entries.map(({ arabicText, translation, transliteration }, idx) => (
        <React.Fragment key={item.id}>
          <View style={styles.section}>
            <View style={styles.arabicTextWrap}>
              <Text style={styles.arabicText}>{arabicText}</Text>
            </View>

            {transliteration ? <Text style={styles.transliteration}>{transliteration}</Text> : null}

            {translation?.en ? <Text style={styles.translation}>{translation.en}</Text> : null}

            <DetailsActionBar item={item} />
          </View>

          {idx < entries.length - 1 ? <View style={styles.divider} /> : null}
        </React.Fragment>
      ))}
    </ScrollView>
  );
};
