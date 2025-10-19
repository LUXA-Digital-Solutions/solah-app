import { useLocalSearchParams } from "expo-router";

import { AdhkarList } from "@/screens/adhkar";

function AdhkarType() {
  const { adhkar_type } = useLocalSearchParams();
  const name = Array.isArray(adhkar_type) ? adhkar_type[0] : adhkar_type;

  return <AdhkarList adhkar_type={name} />;
}

export default AdhkarType;
