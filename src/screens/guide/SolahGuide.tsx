import { View, Text } from "react-native";

import { emptyScreenStyle } from "@/shared/styles";

interface SolahGuideProps {
  solahName: string;
}

export function SolahGuide({ solahName }: SolahGuideProps) {
  return (
    <View style={emptyScreenStyle.container}>
      <Text>Solah Guide Screen: {solahName}</Text>
    </View>
  );
}
