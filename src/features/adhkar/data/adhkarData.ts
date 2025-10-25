import { adhkarAfter, totalAdhkarAfter } from "./adhkar-after";
import { adhkarBefore, totalAdhkarBefore } from "./adhkar-before";
import { adhkarDuring, totalAdhkarDuring } from "./adhkar-during";
import type { AdhkarGroup, AdhkarType } from "./types";

export const adhkarData: AdhkarGroup[] = [adhkarBefore, adhkarDuring, adhkarAfter];
export const totalAdhkarAmt: Record<AdhkarType, number> = {
  before: totalAdhkarBefore,
  during: totalAdhkarDuring,
  after: totalAdhkarAfter,
};
