---
title: Reproducible RNA-seq Snakemake Workflow – S. cerevisiae Response to SPRC
publishDate: 2024-09-02 00:00:00
img: /assets/rnaseq-snakemake.webp
img_alt: "Steps of the Snakemake RNA-seq workflow: reads, fastp, STAR, featureCounts, DESeq2, MultiQC"
order: 2
description: |
  A tested, portable Snakemake workflow (SRA → fastp → STAR → featureCounts → DESeq2 → MultiQC), applied to the response of yeast to H₂S released by S-propargyl-cysteine.
tags:
  - Snakemake
  - RNA-seq
  - DESeq2
  - SLURM
  - CI
---

<div>
  <p>
    <a href="https://github.com/youcef-benmohammed/rnaseq.analysis" target="_blank"><strong>View the workflow on GitHub</strong></a>
    &nbsp;·&nbsp;
    <a href="https://youcef-benmohammed-rnaseq.netlify.app" target="_blank">Analysis report (DE + KEGG enrichment)</a>
  </p>

  <h3>Biological question</h3>
  <p>
    How does <i>Saccharomyces cerevisiae</i> respond to hydrogen sulfide (H₂S), released by the cystathionine-γ-lyase–catalysed reaction of S-propargyl-cysteine (SPRC)? The workflow compares 3 SPRC-treated and 3 control paired-end RNA-seq samples (SRA SRR13978640–45). The report then interprets the differentially expressed genes and enriched KEGG pathways.
  </p>

  <h3>Workflow</h3>
  <ul>
    <li>Reads come from SRA (<code>fasterq-dump</code>) or from local FASTQ files, and the reference from a URL or a local path, all set in <code>config.yaml</code> and <code>samples.tsv</code>. Both files are validated against JSON schemas before the run starts.</li>
    <li><strong>fastp</strong> for trimming and QC, <strong>STAR</strong> for spliced alignment, <strong>samtools</strong> for statistics, <strong>featureCounts</strong> for gene-level counts of read pairs.</li>
    <li><strong>DESeq2</strong> runs every contrast defined in the config: log2 fold changes are shrunk, and the run produces volcano and MA plots, a PCA and a sample-distance heatmap.</li>
    <li><strong>MultiQC</strong> gathers fastp, STAR, samtools and featureCounts metrics into one report.</li>
    <li>Duplicates are deliberately not removed: in RNA-seq, deduplication biases the counts of highly expressed genes.</li>
  </ul>

  <h3>Engineering</h3>
  <ul>
    <li>Each tool has its own pinned conda environment and log file. The workflow runs locally or on <strong>SLURM</strong> through execution profiles.</li>
    <li>Continuous integration (GitHub Actions): <code>snakefmt</code>, <code>snakemake --lint</code>, a dry-run of the real configuration, then a full run with conda on a synthetic dataset.</li>
    <li>The synthetic dataset (40 genes, 2 × 3 samples) contains 16 simulated differentially expressed genes, and a check script verifies that the workflow recovers them. Current result: 16/16 recovered, no false positives.</li>
  </ul>
</div>
