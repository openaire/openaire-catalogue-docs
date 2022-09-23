---
sidebar_position: 3
---
# Clustering functions 

## NgramPairs
It produces a list of concatenations of a pair of ngrams generated from different words.<br />
*Example:*<br />
Input string: `“Search for the Standard Model Higgs Boson”`<br />
Parameters: ngram length = 3<br />
List of ngrams: `“sea”`, `“sta”`, `“mod”`, `“hig”`<br />
Ngram pairs: `“seasta”`, `“stamod”`, `“modhig”`

## SuffixPrefix

It produces ngrams pairs in a particular way: it concatenates the suffix of a string with the prefix of the next in the input string.<br />
*Example:*<br />
Input string: `“Search for the Standard Model Higgs Boson”`<br />
Parameters: suffix and prefix length = 3<br />
Output list: `“ardmod”` (suffix of the word `“Standard”` + prefix of the word `“Model”`), `“rchsta”` (suffix of the word `“Search”` + prefix of the word `“Standard”`)