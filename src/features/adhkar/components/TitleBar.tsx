import { AdhkarType } from "@/features-adhkar/data";
import { TitleBar as AppTitleBar } from "@/shared/components";

const titles = {
  before: "Before Solah",
  during: "During Solah",
  after: "After Solah",
};

export function TitleBar({ adhkar_type }: { adhkar_type: AdhkarType }) {
  return <AppTitleBar title={titles[adhkar_type]} />;
}
