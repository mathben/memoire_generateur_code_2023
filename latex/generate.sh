#!/usr/bin/env bash

sed -i 's/\\usepackage{\\xcolor}/%\\usepackage{\\xcolor}/g' "Mémoire robot codeur Libre sur ERPLibre/Document.tex"
sed -i 's/\\pagecolor\[rgb\]{0,0,0}/%\\pagecolor\[rgb\]{0,0,0}/g' "Mémoire robot codeur Libre sur ERPLibre/Document.tex"
sed -i 's/\\color\[rgb\]{0.5,0.5,0.5}/%\\color\[rgb\]{0.5,0.5,0.5}/g' "Mémoire robot codeur Libre sur ERPLibre/Document.tex"

cd "Mémoire robot codeur Libre sur ERPLibre" || exit
make

cd - || exit

sed -i 's/%\\usepackage{\\xcolor}/\\usepackage{\\xcolor}/g' "Mémoire robot codeur Libre sur ERPLibre/Document.tex"
sed -i 's/%\\pagecolor\[rgb\]{0,0,0}/\\pagecolor\[rgb\]{0,0,0}/g' "Mémoire robot codeur Libre sur ERPLibre/Document.tex"
sed -i 's/%\\color\[rgb\]{0.5,0.5,0.5}/\\color\[rgb\]{0.5,0.5,0.5}/g' "Mémoire robot codeur Libre sur ERPLibre/Document.tex"

mv "Mémoire robot codeur Libre sur ERPLibre/Document.pdf" ./memoire_robot_codeur_libre_erplibre.pdf

./change_text_pdf.sh

xdg-open "./memoire_robot_codeur_libre_erplibre.pdf"
