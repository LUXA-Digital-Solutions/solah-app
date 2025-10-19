import { View, Text } from "react-native";

import { emptyScreenStyle } from "@/shared/styles";

interface AdhkarListScreenProps {
  adhkar_type: string;
}

export function AdhkarList({ adhkar_type }: AdhkarListScreenProps) {
  return (
    <View style={emptyScreenStyle.container}>
      <Text>Adhkar List Screen: {adhkar_type}</Text>
    </View>
  );
}
