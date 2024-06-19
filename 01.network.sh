#!/bin/bash

# ネットワークの作成
docker network create seicheese-frontend --driver bridge --subnet=10.0.1.0/24 --gateway=10.0.1.1