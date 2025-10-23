import React from "react";
import { View, Text, Alert } from "react-native";

import { AdhkarDisplay } from "@/features/adhkar/components/Details/AdhkarDisplay";
import { adhkarData, AdhkarItem } from "@/features/adhkar/data";

interface DetailsProps {
  id: string;
}

export function Details({ id }: DetailsProps) {
  // find adhkar item by id
  const item = adhkarData.flatMap((group) => group.items).find((i) => i.id === id);

  return <>{item ? <WithData item={item} /> : <NoData />}</>;
}

const WithData = ({ item }: { item: AdhkarItem }) => {
  const { title, entries } = item;

  // fallback values in case entries are missing
  const arabic = entries?.[0]?.arabicText || "";
  const transliteration = entries?.[0]?.transliteration || "";
  const translation = entries?.[0]?.translation?.en || "";

  // Callbacks (stubbed)
  const onPrev = () => Alert.alert("Prev", "Go to previous adhkar (to be implemented)");
  const onNext = () => Alert.alert("Next", "Go to next adhkar (to be implemented)");
  const onShare = () => Alert.alert("Share", "Share adhkar (to be implemented)");
  const onFavorite = () => Alert.alert("Favorite", "Favorite adhkar (to be implemented)");
  const onPlay = () => Alert.alert("Play", "Play adhkar (to be implemented)");

  return (
    <AdhkarDisplay
      id={item.id}
      title={title}
      arabic={arabic}
      transliteration={transliteration}
      translation={translation}
      onPrev={onPrev}
      onNext={onNext}
      onShare={onShare}
      onFavorite={onFavorite}
      onPlay={onPlay}
    />
  );
};

const NoData = () => (
  <View className="flex-1 justify-center items-center p-4">
    <Text>No data available</Text>
  </View>
);
