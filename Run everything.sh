#!/bin/bash
cd app-shell && npm i && npm run start &

cd navbar && npm i && npm run serve:single-spa:navbar &

cd section && npm i && npm run serve:single-spa:section &

cd form && npm i && npm run serve:single-spa:form &&

open http://localhost:9000/
