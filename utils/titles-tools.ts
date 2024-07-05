interface RandomTitles {
  randomTitles: Array<string>;
}

export const formatTitles = (data: any) => {
  if (!data) return [];
  return (data as RandomTitles).randomTitles;
};
