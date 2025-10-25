import { useLocalSearchParams } from "expo-router/build/hooks";

import { SolahName } from "@/features-solah/types";
import { SolahGuide } from "@/screens/guide";

function SolahNameScreen() {
  const { solah_name } = useLocalSearchParams();
  const name = Array.isArray(solah_name) ? solah_name[0] : solah_name;

  return <SolahGuide solahName={name as SolahName} />;
}

export default SolahNameScreen;
