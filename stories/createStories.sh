#!/bin/bash
for filename in ./src/Stories/*.elm; do
        fileBase=`basename $filename`
        echo ${fileBase%.*}
        elm make "$filename" --output=./html/${fileBase%.*}.html
done