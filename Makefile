
# Start up environment
start: yarn start

# Run unit tests
test: yarn test --watchAll=false
coverage: yarn test --coverage watchAll=false


# Lint the code
lint: yarn run lint