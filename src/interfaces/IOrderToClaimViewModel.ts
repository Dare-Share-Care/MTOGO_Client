export interface IOrderToClaimViewModel {
    id: number;
    status: string;
    createdDate: string;
    deliveryAddress: {
      street: string;
      city: string;
      zipCode: string;
    };
    // Add any other properties you expect from the order
  }
  