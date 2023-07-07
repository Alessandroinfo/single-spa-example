#!/bin/bash
cd app-shell && npm run start &

cd navbar && npm run serve:single-spa:navbar &

cd section && npm run serve:single-spa:section &

cd form && npm run serve:single-spa:form &&

open http://localhost:9000/
