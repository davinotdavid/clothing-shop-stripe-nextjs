import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "@/lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body;

  if (req.method !== "POST") {
    return res.status(405);
  }

  if (!priceId) {
    return res.status(400).json({ error: "Price ID is required" });
  }

  const successUrl = `${process.env.NEXT_DEV_URL}/success`;
  const cancelUrl = `${process.env.NEXT_DEV_URL}/`;

  // Stripe API requires the creation of a checkout session
  // in order to proceed to the payment screen
  // https://stripe.com/docs/api/checkout/sessions

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return res.status(201).json({ checkoutUrl: checkoutSession.url });
}
