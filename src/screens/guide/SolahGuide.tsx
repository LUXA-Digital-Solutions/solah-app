import { View, Text } from "react-native";

import { SolahName } from "@/features-solah/types";
import { emptyScreenStyle } from "@/shared/styles";

interface SolahGuideProps {
  solahName: SolahName;
}

export function SolahGuide({ solahName }: SolahGuideProps) {
  return (
    <View style={emptyScreenStyle.container}>
      <Text>Solah Guide Screen: {solahName}</Text>
    </View>
  );
}
