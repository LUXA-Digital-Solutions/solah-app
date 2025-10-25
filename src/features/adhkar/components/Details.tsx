import React from "react";
import { View, Text } from "react-native";

import { adhkarData, AdhkarItem } from "@/features/adhkar/data";

import { AdhkarDisplay } from "./details-comps";

interface DetailsProps {
  id: string;
}

export function Details({ id }: DetailsProps) {
  // find adhkar item by id
  const item = adhkarData.flatMap((group) => group.items).find((i) => i.id === id);

  return <>{item ? <WithData item={item} /> : <NoData />}</>;
}

const WithData = ({ item }: { item: AdhkarItem }) => {
  // Callbacks (stubbed)
  return <AdhkarDisplay item={item} />;
};

const NoData = () => (
  <View className="flex-1 justify-center items-center p-4">
    <Text>No data available</Text>
  </View>
);
