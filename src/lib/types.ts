export interface Type {
  country: string;
}

export interface Slice<T> {
  loading: boolean | null;
  status: boolean | null;
  errors: object | string;
  data: T | object | null | [];
}

// export interface PaginationType {
//   first_page_url?: string;
//   prev_page_url?: string;
//   links?:
//     | undefined
//     | {
//         url?: string;
//         active?: string;
//         label?: string;
//       }[];
//   next_page_url?: string;
//   last_page_url?: string;
// }
