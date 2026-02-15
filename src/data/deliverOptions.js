import { daysToMS } from "./daysToMS";

export const deliverOptions = [
  {
    "id": "1",
    "deliveryDays": 7,
    "priceCents": 0,  
    "estimatedDeliveryTimeMs": daysToMS(7) + Date.now()
    
  },
  {
    "id": "2",
    "deliveryDays": 3,
    "priceCents": 499,
    "estimatedDeliveryTimeMs": daysToMS(3) + Date.now()
  },
  {
    "id": "3",
    "deliveryDays": 1,
    "priceCents": 999,
    "estimatedDeliveryTimeMs": daysToMS(1) + Date.now(),
  }
  
]