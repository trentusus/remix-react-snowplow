npm install @snowplow/browser-tracker
npm install @snowplow/browser-plugin-snowplow-ecommerce
npm update
export SNOWPLOW_CONSOLE_API_KEY=3d546fbc-eb89-455f-b91d-28f9762c4f54
npx @snowplow/snowtype init --organizationId b12539df-a711-42bd-bdfa-175308c55fd5
npx @snowplow/snowtype patch -p 04080f2e-24c3-46dd-9e0f-a9631968b872
npx @snowplow/snowtype generate