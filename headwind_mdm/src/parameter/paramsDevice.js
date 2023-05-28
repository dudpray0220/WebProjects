// 초기 파라미터
export let params = {
  value: "",
  groupId: -1,
  configurationId: -1,
  pageSize: 50,
  pageNum: 1,
  sortBy: "GROUP",
  sortDir: "DESC",
};

export let deviceSearchParams = {
  value: "",
  groupId: -1,
  configurationId: -1,
  pageSize: 50,
  pageNum: 1,
  sortBy: "GROUP",
  sortDir: "DESC",
  dateFrom: "",
  dateTo: "",
  onlineEarlierMillis: 0,
  onlineLaterMillis: 0,
  enrollmentDateFrom: "",
  enrollmentDateTo: "",
  mdmMode: false,
  kioskMode: false,
  androidVersion: "",
  launcherVersion: "",
  installationStatus: "",
  imeiChanged: false,
  fastSearch: false,
  dateFromMillis: 0,
  dateToMillis: 0,
  enrollmentDateFromMillis: 0,
  enrollmentDateToMillis: 0,
};