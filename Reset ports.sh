#!/bin/bash

PORTS="4100 4200 4300 9000"
for PORT in $PORTS; do
  lsof -t -i:$PORT |  xargs kill -9
done
