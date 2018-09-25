createDocs:
	cd ./docs && elm make ./src/Main.elm --optimize --output=./elm.js && ../node_modules/.bin/uglifyjs elm.js --compress 'pure_funcs="F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9",pure_getters,keep_fargs=false,unsafe_comps,unsafe' | ../node_modules/.bin/uglifyjs --mangle --output=elm.min.js && cd ../

start:
	cd ./docs && ../node_modules/.bin/elm-app start

test:
	./node_modules/.bin/elm-test