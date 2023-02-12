export interface LatestAction {
  actionDate: string;
  actionTime?: string | null;
  text: string;
}

export interface Bill {
  congress: number | string;
  latestAction: LatestAction;
  number: string;
  originChamber: string;
  originChamberCode: string;
  title: string;
  type: string;
  updateDate: string;
  updateDateIncludingText: string;
  url: string;
}
