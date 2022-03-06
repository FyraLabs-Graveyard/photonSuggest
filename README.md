# AutoSuggest APIs

>**Google, Duckduckgo, Bing, and other autosuggestion APIs**

## Example

The Following Code snippet will help you understand how to use this.

```ts
import * as suggest from "@getskye/suggest";

(async () => {
  await suggest.google("How to");
  await suggest.ddg("How to");
  await suggest.yahoo("How to");
  await suggest.brave("How to");
})();
```

It also has a `suggest.all()` method which combines all results together, Sample output will be as follows:

```js
[
  "how to screenshot on mac",
  "how to take a screenshot",
  "how to take a screenshot on a chromebook",
  "how to screenshot on chromebook",
  "how to train your dragon",
  "how to delete instagram",
  "how to pronounce",
  "how to make french toast",
  "how to draw",
  "how to lose weight fast",
  "how to screenshot",
  "how to get help in windows 10",
  "how to play chess",
  "how to make slime",
  "how to cook a turkey",
  "how to make money online",
  "how to write a letter",
  "how to download google play",
  "how to get free robux",
  "how to",
  "how to delete instagram account",
  "how to delete facebook",
  "how to create firewall rule",
  "how to brine a turkey",
  "how to kiss",
  "how to lose weight",
  "how to download youtube videos",
  "how to make cake",
  "how to take screenshot in laptop",
  "how to get pregnant",
  "how to tie a tie",
  "how to make paper flowers",
  "how to win friends and influence people",
  "how to lose a guy in 10 days",
  "how to marry a millionaire",
  "how to save a life",
  "how to succeed in business without really trying",
  "how to make an american quilt",
  "how to make love to a woman",
  "how to rap",
  "how to eat fried worms",
  "how tall is mt everest?",
  "how the west was won, 1962",
  "how to draw manga",
  "how the west was won, film 1962",
  "how to become cfo",
  "how to install whatsapp on pc",
  "how to turn off pop up blockers",
  "how to solve this equation",
  "how to pay vehicle tax online",
  "how to care for orchid plants",
  "how to file gst return",
  "how to find artist of painting",
  "how to lower your colestrol",
  "how to calculate sq ft",
  "how to restore thinning hair"
]
```

## Credits

* Google
* DuckDuckGo
* Bing
* Yahoo
* Brave
* [theabbie](https://github.com/theabbie/suggest)

## License

This project is licensed under MIT License, See [LICENSE](/LICENSE) for more information

