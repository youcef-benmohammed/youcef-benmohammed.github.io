---
title: Wine Cultivar Prediction
publishDate: 2023-10-02 00:00:00
img: /assets/wineshiny.webp
img_alt: Model tab of the Wine Cultivar Prediction app (held-out accuracy, confusion matrix, variable importance)
description: |
  R Shiny app predicting wine cultivars from chemical properties with a Random Forest model.
category: side
tags:
  - R
  - Random Forest
  - Shiny
---

<div>
  <p>
    <a href="https://5lhxiz-youcef-ben0mohammed.shinyapps.io/wine_classification_shiny-main/" target="_blank"><strong>▶ Open the live app</strong></a>
    &nbsp;·&nbsp;
    <a href="https://github.com/youcef-benmohammed/wine-classification-app" target="_blank">View code on GitHub</a>
  </p>

  <h3>What it does</h3>
  <ul>
    <li>Predicts the cultivar (Barolo, Grignolino, Barbera) of a wine from 13 chemical measurements (UCI Wine dataset, 178 wines).</li>
    <li>Single prediction from a form, or batch prediction from a validated CSV file, with downloadable results.</li>
    <li>Model tab: held-out accuracy, out-of-bag error, confusion matrix and variable importance.</li>
  </ul>

  <h3>Method</h3>
  <ul>
    <li>Stratified 70/30 split; random forest (500 trees) trained once with a fixed seed, so predictions are reproducible.</li>
    <li>96.2 % accuracy on the 53 held-out wines, 1.6 % out-of-bag error.</li>
    <li>Unit tests (testthat) in GitHub Actions; versioned releases generated from a changelog.</li>
  </ul>
</div>
