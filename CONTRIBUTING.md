# Contributing to gridus
First off, thanks for taking the time to contribute!

Now, take a moment to be sure your contributions make sense to everyone else. These are just guidelines, not rules.
Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of contents
- [Code of conduct](#code-of-conduct)
- [Reporting issues](#reporting-issues)
- [Submitting pull requests](#submitting-pull-requests)
-

## Code of conduct
This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.

## Reporting issues
Found a problem? Want a new feature? First of all see if your issue or idea has [already been reported](../../issues).
If don't, just open a [new clear and descriptive issue](../../issues/new).

## Submitting pull requests
Pull requests are the greatest contributions, so be sure they are focused in scope, and do avoid unrelated commits.
And submit your pull request after making sure that all tests pass and they are covering 100% of the code.

- Fork it!
- Clone your fork: `git clone https://github.com/<your-username>/gridus`
- Navigate to the newly cloned directory: `cd gridus`
- Create a new branch for the new feature: `git checkout -b my-new-feature`
- Install the tools necessary for development: `yarn` or `npm install`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request with full remarks documenting your changes.

## Testing
All the test are placed under the `test` folder.
Uses [tape](https://github.com/substack/tape) as test-runner.
The tests parses the stylus files inside test/fixtures using [css-parse](https://github.com/reworkcss/css-parse) and then compares it with the expected css files placed under test/fixtures/expected.

## Code Style
See [stylus-code-style](https://github.com/thiamsantos/stylus-code-style).

## Scripts
The follow scripts are available when you developing.

- `npm test` - Run the tests one time.
- `npm run test:watch` - Watch the files and run the test every time that they are changed.
- `npm run lint` - Lint the files.
