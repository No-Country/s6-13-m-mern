export interface IAmenity {
  id: Types.ObjectId;
  name: String;
  description: String
  reservable: Boolean;
  size: Number;
  schedule: Types.ObjectId;
}