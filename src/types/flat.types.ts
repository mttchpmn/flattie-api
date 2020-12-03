export type FlatInput = {
  name: string;
  address: string;
  contactName: string;
  contactNumber: string;
  displayPicture: string;
};

export type Flat = FlatInput & {
  id: string;
};
