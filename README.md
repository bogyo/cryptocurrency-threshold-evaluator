# cryptocurrency-threshold-evaluator
cryptocurrency-threshold-evaluator with React-Redux-Redux-Thunk

## Install

1. git clone https://github.com/bogyo/cryptocurrency-threshold-evaluator.git
2. npm install (in app root dir)
3. npm start
Use port 3000, if you would like to authenticate with your google account.<br />
Please note: evaluator available only for authenticated users on route /callback.

## Usage
Add a new threshold (default: 0) or change the cryptocurrency fields (default: BTC_LSK) to update the table.

## Possible dev plan && UX improvements

- Radio buttons instead of dropdown => better UX 1 click only solution
- Use graph to visualize data
- add a column with actual threshold => easier to compare - implemented, remove comments from ThresholdTable
- add numbers to rows => easier to check how many times above threshold - implemented, remove comments from ThresholdTable
- add possibility to the user to change units  => easier to read bigger numbers
- use CSS preprocessors (for instance sass).
I decided not use it here, because there were not too complex CSS,
If you are interested in preprocessors and create-react-app config</br>
to enable preprocessors(npm reject, add sass-loader etc.), </br>
 You can find sample in my github repo.</br>
- More mobile friendly UI, improve responsiveness
- more error handling
- auth0 user data like name
- color versions
- unit tests
etc...
