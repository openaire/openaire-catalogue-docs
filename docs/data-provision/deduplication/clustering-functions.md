---
sidebar_position: 3
---
# Clustering functions 

## Ngrams

It creates ngrams from the input field. <br />
```
Example:
Input string: “Search for the Standard Model Higgs Boson”
Parameters: ngram length = 3, maximum number = 4
List of ngrams: “sea”, “sta”, “mod”, “hig”
```

## NgramPairs

It produces a list of concatenations of a pair of ngrams generated from different words.<br />
```
Example:
Input string: “Search for the Standard Model Higgs Boson”
Parameters: ngram length = 3
Ngram pairs: “seasta”, “stamod”, “modhig”
```

## SuffixPrefix

It produces ngrams pairs in a particular way: it concatenates the suffix of a string with the prefix of the next in the input string. A specialization of this function is available as SortedSuffixPrefix. It returns a sorted list. <br />
```
Example:
Input string: “Search for the Standard Model Higgs Boson”
Parameters: suffix and prefix length = 3, maximum number = 2
Output list: “ardmod”` (suffix of the word “Standard” + prefix of the word “Model”), “rchsta” (suffix of the word “Search” + prefix of the word “Standard”)
```

## Acronyms

It creates a number of acronyms out of the words in the input field. <br />
```
Example:
Input string: “Search for the Standard Model Higgs Boson”
Output: "ssmhb"
```

## KeywordsClustering

It creates keys by extracting keywords, out of a customizable list, from the input field. <br />
```
Example:
Input string: “University of Pisa”
Output: "key::001" (code that identifies the keyword "University" in the customizable list)
```

## LowercaseClustering

It creates keys by lowercasing the input field. <br />
```
Example:
Input string: “10.001/ABCD”
Output: "10.001/abcd"
```

## RandomClusteringFunction

It creates random keys from the input field. <br />

## SpaceTrimmingFieldValue

It creates keys by trimming spaces in the input field. <br />
```
Example:
Input string: “Search for the Standard Model Higgs Boson”
Output: "searchstandardmodelhiggsboson"
```

## UrlClustering

It creates keys for an URL field by extracting the domain. <br />
```
Example:
Input string: “http://www.google.it/page”
Output: "www.google.it"
```

## WordsStatsSuffixPrefixChain

It creates keys containing concatenated statistics of the field, i.e. number of words, number of letters and a chain of suffixes and prefixes of the words. <br />
```
Example:
Input string: “Search for the Standard Model Higgs Boson”
Parameters: mod = 10
Output list: "5-3-seaardmod" (number of words + number of letters % 10 + prefix of the word "Search" + suffix of the word "Standard" + prefix of the word "Model"), "5-3-rchstadel" (number of words + number of letters % 10 + suffix of the word "Search" + prefix of the word "Standard" + suffix of the word "Model")
```