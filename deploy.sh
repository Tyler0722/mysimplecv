#!/bin/bash

tar czf mysimplecv.tar.gz build
scp mysimplecv.tar.gz 174.138.51.21:~
rm mysimplecv.tar.gz

ssh -T 174.138.51.21 << 'ENDSSH'
rm -rf mysimplecv
mkdir mysimplecv
tar xf mysimplecv.tar.gz -C mysimplecv
rm mysimplecv.tar.gz

ENDSSH
