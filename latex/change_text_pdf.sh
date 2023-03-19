#!/usr/bin/env bash

pdftk memoire_robot_codeur_libre_erplibre.pdf output memoire_robot_codeur_libre_erplibre_2.pdf uncompress
sed -i 's/Listing/Code/g' memoire_robot_codeur_libre_erplibre_2.pdf
pdftk memoire_robot_codeur_libre_erplibre_2.pdf output memoire_robot_codeur_libre_erplibre.pdf compress
rm memoire_robot_codeur_libre_erplibre_2.pdf
