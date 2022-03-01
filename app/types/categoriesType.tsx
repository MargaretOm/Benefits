export type categoriesType = (
  | {
      id: number;
      title: string;
      cards: {
        id: number;
        image: string;
        sale: string;
      }[];
    }
  | {
      id: number;
      title: string;
      cards: {
        id: number;
        name: string;
        image: string;
        sale: string;
      }[];
    }
)[];
