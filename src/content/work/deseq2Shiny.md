---
title: DESeq2 Shiny – Interactive Differential Expression Analysis
publishDate: 2026-10-01 00:00:00
img: /assets/deseq2-shiny.webp
img_alt: Volcano and MA plots of the pasilla knock-down produced by the DESeq2 Shiny app
description: |
  An R Shiny web application to run a complete bulk RNA-seq differential expression analysis with DESeq2, from raw counts to an HTML report, without writing code.
tags:
  - R Shiny
  - DESeq2
  - RNA-seq
  - Bioconductor
---

<div style="text-align: justify">
  <p>
    <a href="https://5lhxiz-youcef-ben0mohammed.shinyapps.io/deseq2-shiny/" target="_blank"><strong>▶ Open the live demo</strong></a>
    &nbsp;·&nbsp;
    <a href="https://github.com/youcef-benmohammed/deseq2-shiny" target="_blank">View code on GitHub</a>
  </p>
  <p><em>The demo is hosted on a free plan that puts the app to sleep when idle: the first load can take 20–30 seconds. Then click <strong>Load example dataset (pasilla)</strong> → <strong>Run DESeq2</strong>.</em></p>

  <h3>What it does</h3>
  <ul>
    <li><strong>Any experimental design</strong>: the user picks the variable of interest and covariates (batch, sequencing type…) and the model formula is built automatically (e.g. <code>~ type + condition</code>).</li>
    <li><strong>Input validation</strong> with explicit messages: sample mismatches, missing or non-numeric values, non-integer counts.</li>
    <li><strong>Quality control</strong>: low-count pre-filtering, rlog/VST transformation chosen by sample size, interactive PCA, scree plot and sample correlation heatmap.</li>
    <li><strong>Differential expression</strong>: any contrast, optional log2 fold-change shrinkage, live FDR/LFC thresholds, interactive volcano and MA plots (click a gene to see its counts), p-value diagnostics and a heatmap of the top genes.</li>
    <li><strong>Traceability</strong>: TSV exports and a self-contained HTML report with all parameters and <code>sessionInfo()</code>.</li>
  </ul>

  <h3>Engineering</h3>
  <ul>
    <li>Modular Shiny architecture with pure, unit-tested helper functions (testthat, run in GitHub Actions CI).</li>
    <li>Biological sanity test on the pasilla knock-down dataset (Brooks <em>et al.</em>, 2011): the knocked-down gene is recovered as down-regulated.</li>
    <li>Reproducible deployment: conda environment, Dockerfile, and a live deployment on shinyapps.io.</li>
  </ul>
</div>
