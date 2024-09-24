/* generated mock type @ https://quicktype.io/typescript */
export interface Order {
  _id: string;
  courier: string;
  tracking_number: string;
  created: string;
  updated: string;
  checkpoints: Checkpoint[];
  delivery_info: DeliveryInfo;
  destination_country_iso3: string;
  zip_code: string;
}

export interface Checkpoint {
  status_details: string;
  event_timestamp: string;
  status: string;
  country_iso3: string;
  city: string;
  meta?: Meta;
}

export interface Meta {
  delivery_date?: string;
  delivery_time_frame_from?: string;
  delivery_time_frame_to?: string;
  pickup_address?: string;
  pickup_address_link?: string;
  pickup_address_map_url?: string;
}

export interface DeliveryInfo {
  articles: Article[];
  orderNo: string;
  order_date: string;
  recipient: string;
  recipient_notification: string;
  email: string;
  street: string;
  city: string;
  region: string;
  timezone: string;
  announced_delivery_date: string;
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
  if (import.meta.env.VITE_USE_MOCK === 'false') {
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
      //wait 500 millis to see loader
      await new Promise((r) => setTimeout(r, 500));
      const orders = (await response.json()) as Array<Order>;

      return orders.find(
        (order) =>
          order.tracking_number === trackingNumber && order.zip_code === zipCode
      );
    }
  }
};
