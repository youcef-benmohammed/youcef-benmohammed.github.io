---
title: NanoIsoform – Isoform Analysis from Nanopore Long Reads
publishDate: 2026-10-12 00:00:00
img: /assets/nanoisoform.webp
img_alt: "NanoIsoform workflow: flair align, transcriptome, combine and quantify, then DESeq2, DRIMSeq and diffSplice, summarised in an HTML report"
order: 2
description: |
  A Snakemake workflow (FLAIR) for isoform discovery and differential isoform analysis from Oxford Nanopore long reads.
tags:
  - Snakemake
  - Nanopore
  - Long reads
  - FLAIR
  - DRIMSeq
---

<div>
  <p><em>Code available on request: <a href="mailto:youcef.benmohammed@hotmail.com?subject=NanoIsoform%20code">contact me</a>.</em></p>

  <h3>What it does</h3>
  <ul>
    <li>Read QC (NanoPlot, samtools) and alignment with minimap2, guided by annotated splice junctions.</li>
    <li>Isoform discovery per sample, merged transcriptome and classification against the annotation.</li>
    <li>Differential expression (DESeq2), isoform usage and splicing events (DRIMSeq).</li>
    <li>One interactive HTML report (R Markdown, plotly).</li>
  </ul>

  <h3>Engineering</h3>
  <ul>
    <li>Config and sample sheet validated against JSON schemas before the run.</li>
    <li>Runs locally or on SLURM, with conda or environment modules; memory sized from the genome.</li>
    <li>CI with GitHub Actions; public Nanopore test dataset (K562 cells vs. extracellular vesicles).</li>
  </ul>
</div>
