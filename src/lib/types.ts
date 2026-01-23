/**
 * This module closely mirrors the type in the database.
 */

export interface Resource {
  id: number;
  name: string;
  link: string;
  details: string;
  category: string;
  price: number;
  level: string;
  type: string;
  source: string;
  date: string;
}
