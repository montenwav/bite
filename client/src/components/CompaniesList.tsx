type companiesListType = { id: number; src: string }[];

export const companiesList: companiesListType = [];
for (let i = 1; i < 9; i++) {
  companiesList.push({ id: i, src: `/companies/${i}.png` });
}
