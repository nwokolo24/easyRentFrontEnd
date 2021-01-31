import { Items } from "./items";

export interface Reservation{
  reservationId: number,
  customerId: number,
  reservationItem: Items[],
  dueDate: Date,
}