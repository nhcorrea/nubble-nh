/**
 * @description
 * Interface that defines the pagination format of the API
 */

export interface MetaDataPageAPI {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string;
  previous_page_url: string | null;
}

/**
 * @description
 * Interface that defines the format of a page in the API
 * @template Data
 * Type of data that the page will contain
 *
 */
export interface PageAPI<Data> {
  meta: MetaDataPageAPI;
  data: Data[];
}

export interface PageParams {
  page: number;
  per_page: number;
}
