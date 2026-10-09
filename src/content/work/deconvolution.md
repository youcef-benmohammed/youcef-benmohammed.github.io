---
title: Development of a deconvolution pipeline for bulk RNA-seq data for Follicular Lymphoma
publishDate: 2024-06-28 00:00:00
img: /assets/deconvolution-thumb.webp
img_alt: Bulk RNA-seq deconvolution pipeline
order: 3
description: |
  Master's internship (INSERM U1236, Rennes): a pipeline estimating cell-type proportions in bulk RNA-seq of follicular lymphoma from a single-cell reference atlas.
tags:
  - scRNA-seq
  - R
  - Deconvolution
  - BayesPrism
  - MuSiC
---

<div>

### Context
Bulk RNA-seq is cheap and widely available, but it mixes the signal of every cell in a tumour sample. In follicular lymphoma, the composition of the tumour micro-environment matters, so estimating cell-type proportions from bulk data is valuable. This was the subject of my Master's internship at INSERM U1236 (Rennes, January–June 2024).

### Approach
- Literature review of bulk RNA-seq deconvolution methods.
- Construction of a custom single-cell RNA-seq reference atlas.
- Implementation of two complementary methods: **BayesPrism** (Bayesian) and **MuSiC** (weighted least squares).
- Evaluation on **pseudo-bulk simulations** with known proportions: impact of cell-population granularity, similarity between gene signatures, and computational cost.

### Stack
R, Seurat v5, BayesPrism, MuSiC, Bash, Git, Slurm.

<br>
<a href="https://drive.google.com/file/d/1KX-BhoecHBj5cF3oWybZut7Rr5us18UC/view?usp=sharing" target="_blank">Download the internship report (PDF)</a>
</div>
