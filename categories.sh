#!/bin/bash
CATS="$(curl "http://127.0.0.1:4000/categories.txt")"

IFS=';' read -ra ADDR <<< "$CATS"
for i in "${ADDR[@]}"; do
cat > _categories/${i,,}.html << EOF
---
layout: default
title: "$i"
description:
permalink: /category/${i,,}/
---
{% include category.html %}
EOF
done
