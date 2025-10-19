import { useLocalSearchParams } from "expo-router/build/hooks";

import { SolahGuide } from "@/screens/guide";

function SolahName() {
  const { solah_name } = useLocalSearchParams();
  const name = Array.isArray(solah_name) ? solah_name[0] : solah_name;

  return <SolahGuide solahName={name} />;
}

export default SolahName;
