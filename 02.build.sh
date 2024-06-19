#!/bin/bash

# Image のビルド
docker build --target dev -t seicheese:front --no-cache ./Docker && mkdir -p src/node_modules
