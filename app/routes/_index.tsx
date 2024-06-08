import type { MetaFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";
import { Form } from "@remix-run/react";
import { newTracker, trackPageView } from '@snowplow/browser-tracker'
import { SnowplowEcommercePlugin, Cart, Product  } from '@snowplow/browser-plugin-snowplow-ecommerce';
import { trackAddToCartSpec  } from '../snowtype/snowplow.js';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



export default function Index() {

  const handleAddToCartClick = () => {
    // Handler logic here
    console.log(`added to cart!`);
    // Add further logic to actually add the product to the cart


    newTracker('sp1', 'collector-sales-aws.snowplow.io', { 
      appId: 'freddie', 
      plugins: [ 
        SnowplowEcommercePlugin()],
    });

    trackPageView();

    const product: Product = {
      id: 'abc123',
      price: 23,
      name: 'Shoes',
      currency: 'USD'
    }
    // create a new cart
    const cart: Cart = {
      cart_id: '123',
      currency: 'USD',
      total_value: 23,
      products: [
        product
      ],
    };


    // track adding a pair of shoes to cart
    trackAddToCartSpec(cart); // sp1 is the tracker name

  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <button onClick={handleAddToCartClick}>Get Started</button>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}

