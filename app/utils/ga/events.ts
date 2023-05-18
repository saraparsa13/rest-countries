const events = {
  homePage: {
    click: {
      countryCards: (countryDetail: string) => ({
        category: "homePage",
        action: "click",
        label: `countryCard: ${countryDetail}`,
      }),
    },
    search: {
      searchBox: (searchTerm: string) => ({
        category: "homePage",
        action: "search",
        label: `searchTerm: ${searchTerm}`,
      }),
    },
  },
};

export default events;
