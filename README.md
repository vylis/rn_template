react native typescritp template with eslint, jest and detox

--

Il faut bien faire attention à ce que le build IOS soit en release ou en debug en fonction de ce qu'on teste avec Detox, puis de re BUILD avec Detox dès qu'on fait des modifications dans le code.

##commande pour build:
npx detox build --configuration ios

##commande pour tester:
detox test --configuration ios
detox test --configuration ios --loglevel trace

##commande pour record avec detox recorder:
detox recorder --bundleId 'io.diampark.digipark' --simulatorId booted --outputTestFile ‘./e2e/first’Test.e2e.js --testName 'My Recorded Test' --record
