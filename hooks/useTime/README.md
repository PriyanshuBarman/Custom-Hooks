# useTime Hook

A simple React hook that provides live up-to-date current time of any timezone & also automatically updates every minute so you always get the up-to-date current time.

## Feature

**Get Live Time of anywhere by providing IANA timezone ID (e.g., "America/New_York")**

- 0️⃣ **Zero Config :** No arguments needed to get user's/browser's/device's current time. e.g, `useTime()`
- 🕰️ **Live Time :** Get the current time of any timezone, just provide the timezone (e.g., `useTime("America/New_York")`).
- 🕒 **Automatic Updates :** Updates every minute (e.g., `2:15 PM` → `2:16 PM`) so you always get the up-to-date time.
- ⚡ **Optimized Performance :** Only re-renders when the minute changes not every seconds.
- 🌍 **Timezone Support :** Uses IANA timezone IDs (e.g., `"Asia/Tokyo"`).

---

## Installation

**Just copy the [code](./useTime.js) of useTime.js file to your hooks directory**

Then, import the hook into your React component:

```jsx
import { useTime } from "@/hooks/useTime"; // adjust the path as necessary
```

---

## Examples (Feature 1: get current time)

Below are examples for various use cases.

1. Without Any TimeZone or Timestamp
   If no timeZone is provided, the hook defaults to the user's/browser's/device's local timezone.
   **updates automatically every minute (e.g., `2:15 PM` → `2:16 PM`).**

```jsx
import { useTime } from "@/hooks/useTime"; // adjust the path as necessary

function Demo() {
  // Provides user's local time
  const time = useTime();

  return (
    <>
      <h1> Current Local Time: {time} </h1>
    </>
  );
}

export default Demo;
```

2. With Only TimeZone
   Specify a timeZone to get the current time of that timeZone.
   **updates automatically every minute (e.g., `2:15 PM` → `2:16 PM`).**

```js
import { useTime } from "@/hooks/useTime"; // adjust the path as necessary

function Demo() {
  // Provides London's current time
  const time = useTime("Europe/London");

  return (
    <>
      <h1>Current London Time: {time} </h1>
    </>
  );
}

export default Demo;
```

## API Reference

### Parameters

    | Parameter | Type   | Description                                     | Required  |
    | --------- | ------ | ----------------------------------------------- | ----------|
    | timeZone  | string | IANA timezone string (e.g., "America/New_York") | optional  |

### Return Values

    The hook returns an object with the following properties:
    | Property | Type   | Description                                                |
    | -------- | ------ | ---------------------------------------------------------- |
    | time     | string | Formatted time string in 12-hour format (e.g., "7:30 AM") |

## Performance

This hook is designed to be efficient:

- Uses `setInterval` to track time internally without causing re-renders every second
- Only updates the component state when the minute changes
- Cleans up the interval when the component unmounts

## How It Works

1. Updates a variable (Not State) every second to track the current time & avoid unnecessary re-renders
2. Only triggers a re-render when the minute changes
3. Formats the time according to the British English locale in 12-hour format , but you can change it to your desired format
4. Cleans up the interval when the component unmounts, ensuring no memory leaks
