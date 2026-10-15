---
title: NanoIsoform – Isoform Analysis from Nanopore Long Reads
publishDate: 2026-10-12 00:00:00
img: /assets/nanoisoform.webp
img_alt: Read-length distributions of the six Nanopore samples in the NanoIsoform report
order: 2
description: |
  A Snakemake workflow built around FLAIR for isoform discovery, differential expression, isoform usage and splicing from Oxford Nanopore long reads, with one HTML report.
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
  <p>From FASTQ or BAM files and a sample sheet, the workflow builds a transcriptome, quantifies it, tests for differences between groups and summarises everything in one HTML report.</p>
  <ul>
    <li><strong>QC</strong>: NanoPlot on raw reads, samtools statistics on alignments.</li>
    <li><strong>Alignment</strong>: <code>flair align</code> (minimap2 splice mode) guided by the annotated splice junctions, with a prebuilt index shared by all samples.</li>
    <li><strong>Transcriptome</strong>: isoform discovery per sample, merged into one transcriptome, then each isoform classified against the annotation (known, novel isoform, novel gene).</li>
    <li><strong>Statistics</strong>: differential expression of genes and isoforms (DESeq2), differential isoform usage (DRIMSeq) and differential splicing events: exon skipping, alternative 5'/3' sites, intron retention.</li>
    <li><strong>Report</strong>: R Markdown with interactive plotly figures: summary per comparison, read QC, transcriptome composition, PCA and top hits with isoform shares and PSI values.</li>
  </ul>

  <img src="/assets/nanoisoform-overview.webp" alt="Summary and read QC sections of the NanoIsoform HTML report" loading="lazy" />

  <h3>Engineering</h3>
  <ul>
    <li>Config and sample sheet validated against JSON schemas before anything runs: wrong types, unknown keys and missing files are all reported at once.</li>
    <li>Runs on a workstation or on SLURM, with conda environments or environment modules. Memory is sized from the genome and doubles on each retry.</li>
    <li>CI (GitHub Actions): dry run of the test project and checks that invalid inputs are rejected.</li>
    <li>Seven issues found in FLAIR 3.0.0 documented with their workaround: silent R failures, alphabetical reference level, files written outside the output directory, and more.</li>
  </ul>

  <h3>Test data and results</h3>
  <p>Six ONT cDNA samples (K562 cells vs. their extracellular vesicles, three replicates each, human chr5/6/X; Padilla <em>et al.</em>, BMC Genomics 2023). Guiding minimap2 with the annotated junctions raises the share of read junctions matching the annotation from 95–96% to 97–99%. Dropping single-exon isoforms removes 822 mono-exonic “novel genes” (57% of the transcriptome) and brings the differentially expressed genes from 79 down to 25.</p>

  <img src="/assets/nanoisoform-isoforms.webp" alt="Isoform usage and splicing tables of the NanoIsoform report" loading="lazy" />

  <h3>Stack</h3>
  <p>Snakemake 9, FLAIR 3, minimap2, samtools, NanoPlot, DESeq2, DRIMSeq, R Markdown, plotly, Python, SLURM, conda, GitHub Actions.</p>
</div>
