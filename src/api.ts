/* generated mock type @ https://quicktype.io/typescript */
export interface Order {
  _id: string;
  courier: string;
  tracking_number: string;
  created: Date;
  updated: Date;
  checkpoints: Checkpoint[];
  delivery_info: DeliveryInfo;
  destination_country_iso3: string;
  zip_code: string;
}

export interface Checkpoint {
  status_details: string;
  event_timestamp: Date;
  status: string;
  country_iso3: string;
  city: string;
  meta?: Meta;
}

export interface Meta {
  delivery_date?: Date;
  delivery_time_frame_from?: string;
  delivery_time_frame_to?: string;
  pickup_address?: string;
  pickup_address_link?: string;
  pickup_address_map_url?: string;
}

export interface DeliveryInfo {
  articles: Article[];
  orderNo: string;
  order_date: Date;
  recipient: string;
  recipient_notification: string;
  email: string;
  street: string;
  city: string;
  region: string;
  timezone: string;
  announced_delivery_date: Date;
}

export interface Article {
  articleNo: string;
  articleName: string;
  articleImageUrl: null | string;
  quantity: number;
  price: number;
}

export const getOrder = async (
  trackingNumber: string,
  zipCode: string
): Promise<Order | undefined> => {
  if (import.meta.env.VITE_USE_MOCK !== 'true') {
    const base = import.meta.env.VITE_API_END_POINT;
    const response = await fetch(
      `${base}/orders/${trackingNumber}?zip=${zipCode}`
    );
    if (response.ok) {
      return await response.json();
    }
  } else {
    console.log('Mocked enpoint');
    const response = await fetch(`/order.json`);
    if (response.ok) {
      const orders = (await response.json()) as Array<Order>;
      return orders.find(
        (order) =>
          order.tracking_number === trackingNumber && order.zip_code === zipCode
      );
    }
  }
};
